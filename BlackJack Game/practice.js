// Code to run during course for understanding concepts

let firstCard = 10;
let secondCard = 5;

let sum = firstCard + secondCard;

console.log(sum);

if(sum < 21){
    console.log("Do you want to draw new card?");
}else if(sum === 21){
    console.log("Wohhhoooo...! You have got BlackJack!")
}else{
    console.log("You're out of the Game...!")
}

let age = 22;

if(age < 21){
    console.log("You can not enter to the club.");
} else{
    console.log("Welcome...!");
}

let allowedAge = 100;

if(allowedAge > 100){
    console.log("Not Eligible!");
} else if(allowedAge === 100){
    console.log("Here is your Birthday Card From King!");
} else{
    console.log("Not eligible, you have already gotten one!")
}

console.log(4 === 3); // false
console.log(4 > 2); // true
console.log(12 > 12); // false
console.log(3 < 0); //false
console.log(3 >= 3); //true
console.log(11 <= 11); //true
console.log(3 <= 2); //false

// Arrays
let featuredPost = [
    "Checkout ny Netflix Clone",
    "Here's the code for my project",
    "I'have just relaunched my portfolio"
]

console.log(featuredPost);

let details = [
    "Gulshankumar Kuwarlal Patle",
    "Software Engineer Trainee at Konverge.ai",
    "10+ months of experience in NodeJs Developement at TechTure Structure Private Limited",
    "MCA at Shri Ramdeobaba College Of Engineering And Management Nagpur",
    "HTML/CSS/JavaScript, NodeJS, MongoDB, MySQL and Angular/React"
]

console.log(details[4]);
console.log(details[2]);
console.log(details[0]);
console.log(details[1]);
console.log(details[3]);

console.log(details.length); // 5

let describe = [
    "Gulshankumar Kuwarlal Patle",
    13,
    true
];

console.log(describe);
// [
//     'Gulshankumar Kuwarlal Patle',
//     13,
//     true
// ]
let cards = [7, 2];
cards.push(6);

console.log(cards);
// [ 7, 2, 6 ]
let address = "S/O: Kuwarlal Patle At. Sarra Post. Kodelohara Tah. Tirora Dist. Gondia";

describe.push(address);

console.log(describe);
// [
//     'Gulshankumar Kuwarlal Patle',
//     13,
//     true,
//     'S/O: Kuwarlal Patle At. Sarra Post. Kodelohara Tah. Tirora Dist. Gondia'
// ]

describe.pop();
console.log(describe);
// [ 'Gulshankumar Kuwarlal Patle', 13, true ]

describe.splice(-1);
console.log(describe);
// [ 'Gulshankumar Kuwarlal Patle', 13 ]

describe.slice(0, -1);
console.log(describe);
// [ 'Gulshankumar Kuwarlal Patle', 13 ]

// for loop in JavaScript
//      START         FINISH     STEP SIZE  
for(let count = 1; count < 21; count +=1){
    console.log(count);
}

for( let number= 10; number <= 100; number += 10){
    console.log(number);
}

for(let i = 0; i < describe.length; i++){
    console.log(describe[i]);
}

for (let i = 0; i < cards.length; i++){
    console.log(cards[i]);
}

let player1Time = 102;
let player2Time = 107;


function getFastestRaceTime(){
    if(player1Time < player2Time){
        return player1Time;
        // console.log(player1Time);
    } else if(player2Time < player1Time) {
        return player2Time;
        // console.log(player2Time);
    } else{
        return player1Time;
        // console.log(player1Time);
    }
}

let fastestRace = getFastestRaceTime();
console.log(fastestRace); // when we use console.log() in if else the O/P = 102 undefined

function totalRaceTime(){
    return player1Time + player2Time;
} 
let raceTime = totalRaceTime();
console.log(raceTime);

let randomNumber = Math.random() * 6;  // generates Random Numbers between 0 and 1(not inclusive of 1) using the function 
console.log(randomNumber);

floorednumber = Math.floor(2.90610964701563); // return removes decimal number 
console.log(floorednumber);

let randomNumberUsingFloor = Math.floor(Math.random() * 6);  // return from 0 to 5
console.log(randomNumberUsingFloor);

let randomNumbersUsingFloor = Math.floor(Math.random() * 6) + 1;  // return from 0 to 5
console.log(randomNumbersUsingFloor); // return number between 1 to 6

function rollDice(){
    let rollDiceRandomly = Math.floor(Math.random() * 6) + 1;
    return rollDiceRandomly;
}
console.log(rollDice());

// logical operators => AND 

let hasCompletedCourse = true;
let givesCertificate = true;

// using nested if statements
// if(hasCompletedCourse === true){
//     if(givesCertificate === true){
//         generateCertificate();
//     }
// }

if(hasCompletedCourse === true && givesCertificate === true){  
        generateCertificate();
}

// we can also acheve this using adding variables directly into cindition block in if statement
// if(hasCompletedCourse && givesCertificate){  
//     generateCertificate();
// }

function generateCertificate(){
    console.log("Generating Certificate...");
}


let hasSolvedChallenge = false; //place true
let hasHintLeft = false;

if(hasSolvedChallenge === false && hasHintLeft === false){
    showSolution();
}

function showSolution(){
    console.log("Showing the solution...");
}

// logical OR operator

let likesDocumentries = true;
let likesStartups = false;

if(likesDocumentries === true || likesStartups === true){
    recommendMovie();
}

function recommendMovie(){
    console.log("Hey, Check out this new film we think you will like!");
}
