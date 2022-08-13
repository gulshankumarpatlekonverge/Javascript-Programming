// Declaration for Home
let scoreCountHome = 0;
let homeLabelElement = document.getElementById("home-label")

// Declaration for Guest
let scoreCountGuest = 0;
let guestLabelElement = document.getElementById("guest-label")

// Game Winner Label 
let gameWinner = document.getElementById("winner-label")

// Home User
function addOneHome(){
    scoreCountHome += 1;
    homeLabelElement.textContent = scoreCountHome;
}


function addTwoHome(){
    scoreCountHome += 2;
    homeLabelElement.textContent = scoreCountHome;
}


function addThreeHome(){
    scoreCountHome += 3;
    homeLabelElement.textContent = scoreCountHome;
}

// Guest User
function addOneGuest(){
    scoreCountGuest += 1;
    guestLabelElement.textContent = scoreCountGuest;
}


function addTwoGuest(){
    scoreCountGuest += 2;
    guestLabelElement.textContent = scoreCountGuest;
}

function addThreeGuest(){
    scoreCountGuest += 3;
    guestLabelElement.textContent = scoreCountGuest;
}
function checkWinner(){
    if(scoreCountHome > scoreCountGuest){
        gameWinner.textContent = "Winner of the Game Is Home with the score of " + scoreCountHome + ".";
    }
    else if(scoreCountHome < scoreCountGuest){
        gameWinner.textContent = "Winner of the Game Is Guest with the score of " + scoreCountGuest + ".";
    }
    else{
        gameWinner.textContent = "Both Home and Guest user having same points"; 
    }
}