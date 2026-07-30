const card = document.querySelector('.card');
const changeCardColorButton = document.querySelector('.change-card-color-button');

changeCardColorButton.addEventListener('click', () => {
  card.style.backgroundColor = 'lightblue';
});

const cards = document.querySelectorAll('.card');
const changeAllCardsColorButton = document.querySelector('.change-all-cards-color-button');
const violetColor= 'violet';

changeAllCardsColorButton.addEventListener('click', () => {
  cards.forEach((card) => {
    card.style.backgroundColor = violetColor;
  });
});

const openGoogleButton = document.querySelector('.open-google-button');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle () {
  const answer = confirm('Do you want to open Google?');
  if (answer === true) {
    window.open('https://www.google.com');
  }
}

const catalogTitle = document.getElementsByTagName('h1')[0];

catalogTitle.addEventListener('mouseover', (event) => {
  console.log(event.target.textContent);
});

const switchColorButton = document.querySelector('.switch-color-button');

switchColorButton.addEventListener('click', () => {
  switchColorButton.classList.toggle('switch-color-button');
});
