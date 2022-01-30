// TODO: write code here
let index = null;
const text = document.querySelector('.statistics');
let indexText = 0;
const arrCell = document.querySelectorAll('.box-cell');
const activeCell = Math.floor(Math.random() * arrCell.length);
let gameOverIndex = 0;

function randomPosition() {
  if (index === null) {
    index = Math.floor(Math.random() * arrCell.length);
    arrCell[index].classList.add('box__cell-active');
  } else if (index === activeCell) {
    arrCell[index].classList.remove('box__cell-active');
    index = Math.floor(Math.random() * arrCell.length);
    arrCell[index].classList.add('box__cell-active');
  } else {
    arrCell[index].classList.remove('box__cell-active');
    index = activeCell;
    arrCell[index].classList.add('box__cell-active');
  }
}
setInterval(randomPosition, 1000);

arrCell.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('box__cell-active')) {
      indexText += 1;
      text.innerHTML = `Очков ${indexText}`;
    } else {
      gameOverIndex += 1;
      if (gameOverIndex === 5) {
        alert('GameOver');
      }
    }
  });
});
