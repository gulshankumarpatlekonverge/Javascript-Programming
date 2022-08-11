// document.getElementById("count-element").innerText = "10";
let count = 0;
// console.log(count);

//onClick Listener implementation

function increment(){
    console.log("The button is clicked.");
   
    document.getElementById("count-element").innerText = count++;
    
    console.log(count);
}





















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
*/