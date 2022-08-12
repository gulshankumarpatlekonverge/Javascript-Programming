// document.getElementById("count-element").innerText = "10";
let count = 0;
// console.log(count);

//onClick Listener implementation for Button Click Counter

function increment(){
    console.log("The button is clicked.");
   
    document.getElementById("count-element").innerText = count++;
    
    console.log(count);
}

//first function

function helloWorld(){
    console.log(42);
}

helloWorld();

//Function that logs sum

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function logSum(){
    let logSum = lap1 + lap2 + lap3;
    console.log(logSum);
//    console.log(lap1 + lap2 + lap3);
}

logSum()

// Function that increments

let lapsCompleted = 0;

function incrementLapsCompleted(){
  
    lapsCompleted +=1;

}

incrementLapsCompleted();
incrementLapsCompleted();
incrementLapsCompleted();

console.log(lapsCompleted);

/*
Example during explanantion
console.log(myAge); //Reference Error: can't access myAge before initialization

let myAge = 25;

console.log(myAge);

let myAge = 25;
let humanDogRatio = 7;

let myDogAge = myAge * humanDogRatio ;
console.log(myDogAge);

let bonusPoints = 50;
bonusPoints = bonusPoints + 50;
console.log(bonusPoints);

bonusPoints = bonusPoints - 75;
console.log(bonusPoints);

bonusPoints = bonusPoints + 45;
console.log(bonusPoints);

function countdown(){
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}

countdown();

*/