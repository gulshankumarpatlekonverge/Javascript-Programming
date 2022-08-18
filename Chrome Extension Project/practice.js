
let boxButton = document.getElementById("boxButton");

boxButton.addEventListener("click", function(){
    console.log("I want to open the box!")
})

const playerName = "Gulshankumar";
console.log(playerName);
let credits = 45;
console.log(credits);
credits = credits -10;
console.log(credits);

//if possible, use const. If not, use let

const basePrice = 520;
const discount = 120;
let shippingCost = 15;
let shippingTime = "5-12 Days";

shippingCost = 15;
shippingTime = "7-14 Days";

let fullPrice = basePrice - discount +shippingCost;

console.log("Total Cost: "+ fullPrice +". It will arrive in " + shippingTime);

let myNumbers = [1, 2, 3,4, 5];

for(let i=0; i<myNumbers.length; i++){
    console.log(myNumbers[i]);
}

const container = document.getElementById("container");

container.innerHTML = "<button onClick = 'thanks()'> Buy! </button>";

// const thanksGiving = document.getElementById("thanksGiving");

function thanks(){
    container.innerHTML = "<p><h1>Thank you for buying!</h1></p>"
}

// template string / literals
const recipient = "Gulshankumar";
const sender = "Aman";

const email = `Hey, ${recipient}! How is it going? cheers ${sender}.`;
console.log(email);

const from = "Gulshankumar";
const to = "Aman";

const greeting = `Hey, 
                  Good Morning ${to}! 

                  How are you? Hope you are doing well this time.
                  
                  Good to see you in evening call.
                  
                  Thanks and Regards,
                  ${from}.
                  `;
console.log(greeting);

// localstorage

localStorage.setItem("myLeads","www.examplelead.com");

console.log(localStorage.getItem("myLeads"));

key = "my Lead";
value = "www.google.com";

//sets the value
localStorage.setItem(key, value);

//get value from localstorage using key
let link = localStorage.getItem(key);
console.log(link);

// clears localstorage
localStorage.clear();

// localstorage using an array

let data = `["Hello", "Gulshankumar"]`;
// string into an array
data = JSON.parse(data);
data.push("Patle");

console.log(data);
console.log(typeof data);

// array into a string
data = JSON.stringify(data);
console.log(data);
console.log( typeof data);

//truthy and falsy value
//  0 , false, "", null, undefined, NaN => falsy and 
//  1, true => truthy 

// null => how you as a developer signalize emptiness
// undefined => how javascript signalize

const credit = 0;

if(credit > 0){
    console.log("Let's Play");
} else{
    console.log("Sorry, you have no credits");
}

// null
let myName = null;
myName = ["Gulshankumar", "Navin"];

if(myName){  //truthy value
    console.log(myName);
}

myName =null;

if(myName){ // falsy value
    console.log(myName);
} else{
        console.log("Nothing");  
}

// undefined

let currentViewers;

console.log(currentViewers); //undefined

let currentViewer = ["james"];

console.log(currentViewer); //james 

let trueorfalse = Boolean("hello"); // true

console.log(trueorfalse);

let falseortrue = Boolean(""); // false

console.log(falseortrue);

console.log(Boolean("")); // false
console.log(Boolean("0")); //true
console.log(Boolean(100)); // true
console.log(Boolean(null)); //false
console.log(Boolean([0])); //true
console.log(Boolean(-0)); // false