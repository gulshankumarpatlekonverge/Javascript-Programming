// challenge 1 => let, const and string literals

const player = "Navin";
const opponent = "Saurabh";
const game = "Amazing Fighter";

let points = 0;
let hasWon = false;

points += 100;
hasWon = true;

console.log("Using String literals****");
if(hasWon){
    console.log(`${player} got ${points} points and won the ${game} game!`);
} else{
    console.log(`The winner is ${opponent}! ${player} lost the game.`);
}

console.log("****Using Quotes");
if(hasWon){
    console.log(player+" got " + points + " points and won the " + game + " game!");
} else{
    console.log("The winner is " + opponent+ "! "+player+" lost the game.");
}

// challenge 2 log out element from array

let myCourses = ["Git Course", "JavaScript Programming", "HTML/CSS", "REACT", "Node"];

function courses(courses){
    console.log(courses);

    for(let i = 0; i < courses.length; i++ ){
        console.log(courses[i]);
    }
}

courses(myCourses);

// challenge 3 = save to local storage

localStorage.setItem("myFullname",  "Gulshankumar Kuwarlal Patle");


let item = localStorage.getItem("myFullname");
console.log(item);

// challenge 4 => add EventListener To array 

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

let scoreButton = document.getElementById("score-btn");

scoreButton.addEventListener("click", function(){
    console.log(data[0].score);
});

// challenge 5 => sentence generator

let largestCountries = ["China", "India", "USA"];

let bestFruits  = ["Bananas", "Apples"];

function generateSentence( description, array){

    // if(description === "largest countries"){
    //     console.log(`The largest countries are : ${array.join(' ')}.`);
    // } else{
    //     console.log(`The Two best fruits are : ${array.join(' ')}`);
    // }

    let baseString = `The ${array.length} ${description} are `;
    for(let i = 0; i < array.length; i++){
        lastIndex = array.length - 1;
        if( i === lastIndex){
            baseString += array[i];  
        } else{
            baseString += array[i] + ", ";     
        }
    }
    console.log(baseString);
}

generateSentence("largest countries", largestCountries);
generateSentence("best fruits", bestFruits);

// challenge 6 => Render Images

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg"
]

let container = document.getElementById("container")

function renderImages(){
    let images = "";
    for(let i =0; i <= imgs.length; i++){
            images += `<img class ="team-img" alt="Nature Photographs" src="${imgs[i]}">`;
    }
    container.innerHTML = images;
}

renderImages();

// Rounding Number
const totalPrice = 420.69235632455;
const btn = document.getElementById("buy-btn");
btn.textContent = `Buy €${ totalPrice.toPrecision(5) }`;

const btn2 = document.getElementById("purchase-btn");
btn2.textContent = `Buy €${ totalPrice.toFixed(2)}`;

// converting string in a number
const price = "420.69235632455";
const btn3 = document.getElementById("send-btn");
// btn3.textContent = `Buy €${ Number(totalPrice).toFixed(2)}`;
let priceInFloat = parseFloat(price);
btn3.textContent = `Send RS.${ priceInFloat.toFixed(2)}`;