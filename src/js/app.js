// TODO: write code here

const text = document.querySelector('.statistics');
const btnNewGame = document.querySelector('.new__game');
const modal = document.querySelector('.modal__window');
const arrCell = document.querySelectorAll('.box-cell');
const activeCell = Math.floor(Math.random() * arrCell.length);
let gameOverIndex = 0;
let index = null;
let indexText = 0;

function clear() {
  arrCell.forEach((item) => {
    if (item.classList.contains('box__cell-active')) {
      item.classList.remove('box__cell-active');
    }
  });
  clearInterval(interval);
  modal.style.display = 'flex';
}

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
let interval = setInterval(randomPosition, 1000);

arrCell.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('box__cell-active')) {
      indexText += 1;
      text.innerHTML = `Очков ${indexText}`;
    } else {
      gameOverIndex += 1;
      if (gameOverIndex === 5) {
        clear();
      }
    }
  });
});

btnNewGame.addEventListener('click', () => {
  modal.style.display = 'none';
  gameOverIndex = 0;
  indexText = 0;
  text.innerHTML = `Очков ${indexText}`;
  interval = setInterval(randomPosition, 1000);
});
