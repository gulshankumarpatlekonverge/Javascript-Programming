// var firstCard = getRandomCards();
// var secondCard = getRandomCards();
// var cards = [firstCard, secondCard];
var cards = []
var hasBlackJack = false;
var isAlive = false;

var message = "";
// var sum = firstCard + secondCard;
var sum = 0;

var messageEl = document.getElementById("message-el");
var sumEl = document.getElementById("sum-el");
var cardsEl = document.getElementById("card-el");

// DOM - querySelector("#...") using id attribute in html
// var sumEl = document.querySelector("#sum-el");

// DOM - querySelector(".----") using class attribute in html
// var sumEl = document.querySelector(".sum-el");

function getRandomCards(){
    let randomCards = Math.floor(Math.random() * 13) + 1;
    
    if(randomCards === 1){
        return 11;
    } else if(randomCards > 10){
        return 10;
    } else{
        return randomCards;
    }
}

function startGame(){
    //renderGame();
    isAlive = true;

    var firstCard = getRandomCards();
    var secondCard = getRandomCards();
    cards = [firstCard, secondCard];

    sum = firstCard + secondCard;
    renderGame();
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
    if(isAlive === true && hasBlackJack === false){
        var newCard = getRandomCards();
        sum += newCard;
        cards.push(newCard);
        // renderGame(newCard);
        renderGame();
    }
}