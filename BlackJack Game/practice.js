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