var firstCard = getRandomCards();
var secondCard = getRandomCards();
var cards = [firstCard, secondCard];
var hasBlackJack = false;
var isAlive = true;

var message = "";
var sum = firstCard + secondCard;

var messageEl = document.getElementById("message-el");
var sumEl = document.getElementById("sum-el");
var cardsEl = document.getElementById("card-el");

// DOM - querySelector("#...") using id attribute in html
// var sumEl = document.querySelector("#sum-el");

// DOM - querySelector(".----") using class attribute in html
// var sumEl = document.querySelector(".sum-el");

function startGame(){
    renderGame();
}

function getRandomCards(){
    return 5;
}

function renderGame(){ //newCard in the parameter
    // let newCards = newCard || 0;

    if(sum <= 20){ 
        message = "Do you want to draw new card?";
    }else if(sum === 21){
        message = "You have got BlackJack!";
        hasBlackJack = true;
    }else{
        message = "You're out of the Game...!";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum : "+ sum;
    // cardsEl.textContent = "Cards : " + firstCard +" "+ secondCard + " " + newCards; 
    // cardsEl.textContent = "Cards : " + cards[0]+" "+ cards[1];   // array implementation
    
    cardsEl.textContent = "Cards : ";
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent +=  cards[i] + " ";
    }
}

function addNewCard(){
    var newCard = getRandomCards();
    sum += newCard;
    cards.push(newCard);
    // renderGame(newCard);
    renderGame();
}