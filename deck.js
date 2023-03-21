const suits = ["clubs", "spades", "diamonds", "hearts"];
const values = ["ace",2,3,4,5,6,7,8,9,10,"jack","queen","king"];    
let deck = [];
let userCard = [];
let dealerCard = [];  

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
  console.log(cards);
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

function showDeck() {
  let parentElement = document.body;
  makeDeck(parentElement);
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

function getRandCard(parentElement = document.getElementById("hit-button")) {
  if (hand.length < 52) { // if there are still cards left in the deck
    let newCard;
    do {
      newCard = randCard();
    } while (hand.includes(newCard)); 

    let cardElement = document.createElement("img");
    cardElement.id = "card-type";
    cardElement.src = newCard;
    parentElement.appendChild(cardElement);
  }
}


function iniCard() {
  for (let i = 0; i < 2; i++) {
    dealerCard.push(getRandCard());
    userCard.push(getRandCard());
  }
}


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