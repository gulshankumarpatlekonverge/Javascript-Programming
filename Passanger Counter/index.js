// document.getElementById("count-element").innerText = "10";
let count = 0;
let countElement = document.getElementById("count-element")

// console.log(count);

//onClick Listener implementation for Button Click Counter
    // console.log("The button is clicked.");
    // count = count + 1;
    // document.getElementById("count-element").innerText = count;
    // document.getElementById("count-element").innerText = count++;

function increment(){    
    // solution by course
  
    count +=  1;
    countElement.innerText = count;
   
    // console.log(count);
}
    // saveElement.innerText += countData;
    // Google search: innerText alternative on MDN 
function save(){
    let saveElement = document.getElementById("save-element")
    let countData = count + " - ";
    saveElement.textContent +=  countData; //alternative of innertext to show hidden text i.e. innerText is used to show human-readable code
    countElement.textContent = 0;
    count = 0;
}

/*
Example during explanantion
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

let username = "Captain Jack Sparrow";

console.log(username);

let message = "You have three new notifications"

console.log(username + ", " + message );

let messageToUser = message + ", " + username + ",";

console.log(messageToUser);

let myname = "Gulshankumar";
let greeting = "Hi, My name is ";

let myGreeting = greeting + " " + myname;
console.log(myGreeting);

let points = 4;
let bonusPoints = "10";

let totalPoints = points + bonusPoints;
console.log(totalPoints); // 410 converts number into string

console.log(4 + 5); //9
console.log("2" + "4"); //24
console.log("5" + 1); //51
console.log(100 + "100"); //1000 


*/