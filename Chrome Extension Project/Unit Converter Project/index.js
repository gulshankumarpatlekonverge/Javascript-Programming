

let inputBox= document.getElementById("input-box");
let unitButton = document.getElementById("unit-button");

let labelLength = document.getElementById("label-element1");
let lableVolume = document.getElementById("label-element2");
let labelMass = document.getElementById("label-element3");

// console.log(inputBox)
// console.log(unitButton)
// console.log(labelLength)
// console.log(lableVolume)
// console.log(labelMass)

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

unitButton.addEventListener("click", function(){
    // console.log("button clicked...")

    let lengthInMeterToFeet = inputBox.value * 3.281;
    let lengthInFeetToMeter = inputBox.value * 0.3048;

    labelLength.innerHTML = `<label id="label-element1">${inputBox.value} Meters = ${lengthInMeterToFeet.toFixed(2)} Feet | ${inputBox.value} Feet = ${lengthInFeetToMeter.toFixed(2)} Meters</label>`
    // console.log(lengthInMeterToFeet,lengthInFeetToMeter);

    let volumeLiterToGallon = inputBox.value * 0.268;
    let volumeGallonToLiter = inputBox.value * 4.546092;

    lableVolume.innerHTML = `<label id="label-element2">${inputBox.value} Liters = ${volumeLiterToGallon.toFixed(2)} Gallons | ${inputBox.value} Gallons = ${volumeGallonToLiter.toFixed(2)} Liters</label>`
    // console.log(volumeLiterToGallon,volumeGallonToLiter);

    let massKillogramToPound = inputBox.value * 2.204;
    let massPoundToKillogram = inputBox.value * 0.45359237;
    labelMass.innerHTML = `<label id="label-element3">${inputBox.value} Killogram = ${massKillogramToPound.toFixed(2)} Pounds | ${inputBox.value} Pounds = ${massPoundToKillogram.toFixed(2)} Killogram</label>`
    // console.log(massKillogramToPound,massPoundToKillogram);
});