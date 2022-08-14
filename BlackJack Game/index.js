var firstCard = 10;
var secondCard = 5;

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

function renderGame(newCard){
    let newCards = newCard || 0;

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
    cardsEl.textContent = "Cards : " + firstCard +" "+ secondCard + " " + newCards;    
}

function addNewCard(){
    var newCard = 6;
    sum += newCard;
    renderGame(newCard);
}