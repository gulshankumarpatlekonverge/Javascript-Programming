// First Challenge / Variable Practice => create two variable and assign there value to third variable and log it.

let firstName = "Gulshakumar";
let lastName = "Patle";

let fullName = firstName + " " + lastName;
console.log(fullName);

//Second Challenge / Concatinating two strings into function
let myName = "Linda";
let greeting = "Hi there";

function createGreeting(){
    let myGreeting = greeting + ", " + myName + "!"; 
    console.log(myGreeting);
    console.log(greeting + ", " + myName + "!");
}

createGreeting();

//Third Challenge / Incremening and Decrementing

let myPoints = 3;

function add3Points(){
    // myPoints += 1;
    myPoints += 3;
}

function removePoint(){
    myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
// add3Points();
// add3Points();
// add3Points();
// add3Points();
removePoint();
removePoint();

console.log(myPoints);

// Fourth Challenge / String and Number
 
console.log("2" + 2); // "22"
console.log(11 + 7); // 18
console.log(6 + "5"); // "65"
console.log("myPoints : " + 5 + 9); // "myPoints : 59"
console.log(2 + 2); // 4
console.log("11" + "14"); // "1114"

// Fifth Challenge / Show the Error Message on Button Click Event

let errorElement = document.getElementById("error");

function errorMessage(){
    errorElement.textContent = "Something went wrong, please try again later!";
}

// Sixth Challenge / Basic Calculator
let number1 = 10;
let number2 = 2;
document.getElementById("number1-el").textContent = number1;
document.getElementById("number2-el").textContent = number2;
let resultElement = document.getElementById("result-el");

function addition(){
    let result = number1 + number2;
    resultElement.textContent = "Result : " +  result;
}

function subtraction(){
    let result = number1 - number2;
    resultElement.textContent = "Result : " + result;
}

function multiplication(){
    let result = number1 * number2;
    resultElement.textContent = "Result : " +  result;
}

function division(){
    let result = number1 / number2;
    resultElement.textContent = "Result : " +  result;
}