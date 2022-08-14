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