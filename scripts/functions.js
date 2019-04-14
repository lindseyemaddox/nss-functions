
console.log("hello there functions");

//////////////////// CHICKENMONKEY ////////////////////

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

let bandNumber = 0;

const takeNumber = (bandName) => {
  bandNumber += 1;
  console.log(`${bandNumber}. ${bandName}`);
}

takeNumber("Band One");
takeNumber("Band Two");
takeNumber("Band Three");


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

// array that is grouping the objects together
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
  // Modify the food so that it is cooked
  currentObject.cooked = true;

  // Put the cooked food into the appropriate array
  cookedFood.push(currentObject);
};

// iterate over the array of foods and 
// invoke the function for each item 
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






