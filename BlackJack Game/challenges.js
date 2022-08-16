// array loop and DOM

let sentence = ["Hello", "my", "name", "is", "Gulshankumar."];
let greetingEl = document.getElementById("paragraph-el");
console.log(greetingEl);
for( let i = 0; i < sentence.length; i++){
    // greetingEl.textContent  += sentence[i] + " "; to provide space between an array elements 
    greetingEl.textContent  += sentence[i];
    greetingEl.textContent += " "; // to provide space between an array elements
    console.log(sentence[i]);
}

// challenge 1

let person = {
    myName: "Gulshankumar Patle",
    age: 24,
    country: "India",
    logData: function (){
        console.log(person.myName + "is "+ person.age +" years old and lives in "+ person.country + ".");
    }
}

person.logData();

function logData(){
    console.log(person.myName + "is "+ person.age +" years old and lives in "+ person.country + ".");
}

logData();

// challege 2

let age = 15;

if(age < 6){
    console.log("Passanger will travel free.");
} else if(age < 18){
    console.log("Passanger will get child discount.");
} else if(age < 27){
    console.log("Passanger will get student discount.");
} else if(age < 67){
    console.log("Passanger has to pay full price.");
} else{
    console.log("Passanger will get senior citizen discount.");
}

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

for(let i=0; i< largeCountries.length; i++){
    console.log(largeCountries[i]);
}

// challenge 3 => push(), Pop(), unshift(), shift()
let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monoco"];

console.log(largeCountries2); // The pop() function is used to delete the last element/item of the array.
largeCountries2.pop();
console.log(largeCountries2);
largeCountries2.push("Pakistan"); //push() is used to add an element/item to the end of an array.
console.log(largeCountries2);
largeCountries2.shift(); // The shift() method in JavaScript removes an item from the beginning of an array and shifts every other item to the previous index
console.log(largeCountries2);
largeCountries2.unshift("China");// the unshift() method adds an item to the beginning of an array while shifting every other item to the next index.
console.log(largeCountries2);

// challenge 4

let dayOfMonth = 13;
let weekDay = "Friday";

if(dayOfMonth === 13 && weekDay === "Friday"){
    console.log("spooky face.");
} else{
    console.log("No spooky face.");
}

// challenge 5

let hands = ["rock", "paper", "scissor"];
let randomHands = Math.floor(Math.random() * 3);
console.log(randomHands);

function randomHand(){
    if(randomHands === 0){
        return hands[0];
    } else if(randomHands === 1){
        return hands[1];
    } else {
        return hands[2];
    }
} 
 console.log(randomHand());

 function getHands(){
    let randomIndex = Math.floor(Math.random() * 3);
    return hands[randomIndex];
 }
 console.log(getHands());

//  challenge 6

let fruits = ["apple", "orange", "apple", "apple", "orange"];

let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function sortFruits(){
    for(let i = 0; i < fruits.length; i++){
        if(fruits[i] === "apple"){
            appleShelf.textContent += fruits[i] +" ";
        }else if(fruits[i] === "orange"){
            orangeShelf.textContent += fruits[i]+" ";
        }
    }
}

sortFruits();