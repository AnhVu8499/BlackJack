const suits = ["clubs", "spades", "diamonds", "hearts"];
const values = ["ace",2,3,4,5,6,7,8,9,10,"jack","queen","king"];    
let deck = [];
let userCard = [];
let dealerCard = [];  
let hitClickCount = 0;
let startClickCount = 0;

// These feafures will (not) be displayed when loaded 
window.addEventListener('load', function() {  
  document.getElementById('suit-type').style.display = 'none';
  document.getElementById('hit-button').style.display = 'none';
  document.getElementById('stay-button').style.display = 'none';
  document.getElementById('reset-button').style.display = 'none';
  document.getElementById('dealer-hand').style.display = 'none';
  document.getElementById('user-hand').style.display = 'none';
});

function cardImg() {
  let deck = []; //erase the deck before using
  for (let value of values) {
    let card = {
      name: value,
      suits: suits
    };
    deck.push(card);
  }
  return deck;
}

function cardValue(value) {
  if (value == "ace") {
    value = 11;
  }
  else if (value == "jack" || value =="queen" || value =="king") {
    value = 10;
  }
  else {
    value = value;
  }
  return value;
}

// assign value to each cards
function linkValue() {
  let deck = cardImg();
  let cards = [];
  for (let eachCard of deck) {
    let card = {
      name: eachCard.name,
      suits: eachCard.suits,
      value: cardValue(eachCard.name)
    };
    cards.push(card);
  }
  return cards;
}

function makeDeck(parentElement) {
  document.querySelectorAll('img').forEach(function(card) {
    card.remove();
  }); //This helps to remove the printed cards.
  let deck = cardImg();
  for (let card of deck) {
    for (let suit of card.suits) {
      let cardElement = document.createElement("img");
      cardElement.id = "card-type";
      cardElement.src = `Deck/PNG-cards-1.3/${card.name}_of_${suit}.png`;
      parentElement.appendChild(cardElement);
    }
  }
}

//
//
//
//

function randCard() {
  let randV = Math.floor(Math.random() * values.length);
  let randS = Math.floor(Math.random() * suits.length);
  let randVal = values[randV];
  let randSuit = suits[randS];
  let rCard = `Deck/PNG-cards-1.3/${randVal}_of_${randSuit}.png`; 
  return rCard;
}

let hand = [];
let numCardsDrawn = 0;

function getRandCard() {
  if (numCardsDrawn < 52) { // if there are still cards left in the deck
    let newCard;
    do {
      newCard = randCard();
    } while (hand.includes(newCard)); 

    hand.push(newCard); // add the new card to the hand
    numCardsDrawn++; // increment the number of cards drawn

    let cardElement = document.createElement("img");
    cardElement.id = "card-type";
    cardElement.src = newCard;
    return cardElement;
  }
}

function uStarterCard() {
  for (let i = 0; i < 2; i++) {
    let cardElement = getRandCard();
    userCard.push(cardElement);
    document.getElementById("user-hand").appendChild(cardElement);
  }
}

function dStarterCard() {
  for (let i = 0; i < 2; i++) {
    let cardElement = getRandCard();
    dealerCard.push(cardElement);
    document.getElementById("dealer-hand").appendChild(cardElement);
  }
}

// Button "Start the game"
function startGame() {
  document.querySelectorAll('img').forEach(function(card) {
    card.remove();
  }); // remove all cards before use
  startClickCount++;
  document.getElementById('hit-button').style.display = 'block';
  document.getElementById('stay-button').style.display = 'block';
  document.getElementById('reset-button').style.display = 'block';
  document.getElementById('dealer-hand').style.display = 'block';
  document.getElementById('user-hand').style.display = 'block';

  uStarterCard();
  dStarterCard();

  const userCardsElement = document.getElementById("user-hand");
  userCardsElement.classList.add("user-cards");
  for (let card of userCard) {
    const cardElement = document.createElement("div");
    cardElement.textContent = card;
  }

  const dealerCardsElement = document.getElementById("dealer-hand");
  dealerCardsElement.classList.add("dealer-cards");
  for (let card of dealerCard) {
    const cardElement = document.createElement("div");
    cardElement.textContent = card;
  }
  // Hide the button after getting the starter cards
  document.getElementById("start-button").style.display ="none";
}

function reset() {
  document.querySelectorAll('img').forEach(function(card) {
    card.remove();
  }); // remove all cards before use
  document.getElementById("start-button").style.display ="block";
  document.getElementById("reset-button").style.display ="none";
  hitClickCount = 0;
  startClickCount = 0;
}

// Button "Stay"
function stayCard() {
  document.getElementById("hit-button").style.display ="none";
  document.getElementById("stay-button").style.display ="none";
}

// Button "Hit"
function hitCard() {
  hitBut = document.getElementById('hit-button');
  hitClickCount++;
  let cardElement = getRandCard();
  document.getElementById('user-hand').appendChild(cardElement);
  if (hitClickCount === 3){
    hitBut.style.display ="none";
    // also hide the stay button when hit 3 times
    document.getElementById('stay-button').style.display ="none";
  }
}


// Below are functions to test the game
//This funciton is to test if the cardValue function is working
/*
function test() {
  let outputDiv = document.getElementById("test");
  let card1 = cardValue("ace");
  let card2 = cardValue("king");
  if (card1 < card2) {
    outputDiv.innerHTML += "right<br>";
  }
  else {
    outputDiv.innerHTML += "wrong<br>";
  }
}
*/

// Test if the deck exists
function showDeck() {
  let parentElement = document.body;
  makeDeck(parentElement);
}

function showClubs() {
  showDeck();

  let cards = document.querySelectorAll("img");
  cards.forEach(function(card) {
    if (!card.src.includes("clubs")) {
      card.style.display = "none";
    }
  });
}

function showSpades() {
  showDeck();
  
  let cards = document.querySelectorAll("img");
  cards.forEach(function(card) {
    if (!card.src.includes("spades")) {
      card.style.display = "none";
    }
  });
}

function showDiamonds() {
  showDeck();

  let cards = document.querySelectorAll("img");
  cards.forEach(function(card) {
    if (!card.src.includes("diamonds")) {
      card.style.display = "none";
    }
  });
}

function showHearts() {
  showDeck();

  let cards = document.querySelectorAll("img");
  cards.forEach(function(card) {
    if (!card.src.includes("hearts")) {
      card.style.display = "none";
    }
  });
}