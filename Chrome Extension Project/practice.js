
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