const card = document.querySelector('.card');
const changeCardColorButton = document.querySelector('.change-card-color-button');

changeCardColorButton.addEventListener('click', () => {
  card.style.backgroundColor = 'lightblue';
});

const cards = document.querySelectorAll('.card');
const changeAllCardsColorButton = document.querySelector('.change-all-cards-color-button');
const VioletColor= 'violet';

changeAllCardsColorButton.addEventListener('click', () => {
  cards.forEach((card) => {
    card.style.backgroundColor = VioletColor;
  });
});

const openGoogleButton = document.querySelector('.open-google-button');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle () {
  const answer = confirm('Do you want to open Google?');
  if (answer === true) {
    window.open('https://www.google.com');
  }
  else {return;}
}

const consoleLogButton = document.querySelector('.catalog__title');

consoleLogButton.addEventListener('click', () => {
  outputConsolelog('Выбери свой продукт');
});

function outputConsolelog(message) {
  alert(message);
  console.log(message);
}

const switchColorButton = document.querySelector('.switch-color-button');

switchColorButton.addEventListener('click', () => {
  switchColorButton.classList.toggle('switch-color-button');
});
