let player= {
  name: 'Nikhar',
  chips: 145
}
let cardsAll = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl=document.querySelector("#player-el")
playerEl.textContent=player.name+" $"+player.chips

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (10 < randomNumber) {
    return 10;
  } else {
    return randomNumber;
  }
}
function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cardsAll = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
}
function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    hasBlackJack = true;
    message = "You've got blackjack";
  } else {
    isAlive = false;
    message = "You're out of the game";
  }
  cardsEl.textContent = "Cards: ";
  for (i = 0; i < cardsAll.length; i += 1) {
    cardsEl.textContent += cardsAll[i] + " ";
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
}
function newCard() {
  if (isAlive===true && hasBlackJack===false) {
    let thirdCard = getRandomCard();
  sum += thirdCard;
  cardsAll.push(thirdCard);
  renderGame();
  sumEl.textContent = "Sum: " + sum;
  }
}
