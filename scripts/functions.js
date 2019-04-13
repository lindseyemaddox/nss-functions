
console.log("hello there functions");

//////////////////// CHICKENMONKEY ////////////////////

// is this necessary?
let currentNumber; 

for (let currentNumber = 1; currentNumber <= 100; currentNumber++ ) {

  if (currentNumber % 5 === 0 && currentNumber % 7 === 0 ) {
    console.log("chickenmonkey");
  }
    
  else if (currentNumber % 5 === 0 ) {
    console.log("chicken");
  }

  else if (currentNumber % 7 === 0) {
    console.log("monkey");
  }

  else {
    console.log(currentNumber);
  } 
    
}


//////////////////// BATTLE OF THE BANDS ////////////////////

// Write a function that accepts any band name as an argument. 
// The function will increment a global variable by one each time it is invoked, 
// and return that number and the band name concatenated together.

let bandNumber = 1;

const takeNumber = function assignNumber (...restArgs) {
  // for (let bandNumber = 1; bandNumber >= 1; bandNumber++) => i
  // forEach bandNumber (restArgs.length);22222222222
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console


//////////////////// COOKOUT ////////////////////

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
  // Modify the food so that it is cooked
  currentObject.cooked = true;

  // Put the cooked food into the appropriate array
  cookedFood.push(currentObject);
};

// iterate over the array of foods and invoke the function for each item 
// so that the cookedFood array contains all of the items after they are cooked.

// for (let i = 0; i <= foods.length; i++) {
//   grill();
// }


//////////////////// OVERLY EXCITED ////////////////////

// create a single JavaScript function named addExcitement 
// that will use console.log() to print out a sentence to the browser console.

// function addExcitement() {
//   console.log("This is a sentence.");
// }

// addExcitement();


//////////////////// STACKING WORDS ////////////////////

// Create an addExcitement function that should console.log() rows of words. 
// It should take an array containing the words of a sentence and 
// output them in the developer console.

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// The addExcitement function should be an impure function, 
// and accept the array as the sole argument. It should iterate over the array
// and output the words to the browser console.

function addExcitement (sentence) {

  // Each time the for loop executes, it adds one more word to this string
  let buildMeUp = ""

  for (let i = 0; i < sentence.length; i++) {
    // Concatenate the new word onto buildMeUp

    // Print buildMeUp to the console
  }
}

// Invoke the function and pass in the array
addExcitement(sentence)






