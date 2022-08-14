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