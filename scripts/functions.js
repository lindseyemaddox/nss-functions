
console.log("hello there functions");

console.log("//////////////////// CHICKENMONKEY ////////////////////");

let currentNumber;

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {

  if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
    console.log("chickenmonkey");
  }

  else if (currentNumber % 5 === 0) {
    console.log("chicken");
  }

  else if (currentNumber % 7 === 0) {
    console.log("monkey");
  }

  else {
    console.log(currentNumber);
  }

}


console.log("//////////////////// BATTLE OF THE BANDS ////////////////////");

let bandNumber = 0;

const takeNumber = (bandName) => {
  bandNumber += 1;
  console.log(`${bandNumber}. ${bandName}`);
}

takeNumber("Band One");
takeNumber("Band Two");
takeNumber("Band Three");


console.log("//////////////////// COOKOUT ////////////////////");

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

// array grouping the objects together
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// empty array to store the grilled objects
const cookedFood = [];

let grill = (currentObject) => {
  // cook the food
  currentObject.cooked = true;

  // move cooked food into the empty array
  cookedFood.push(currentObject);
};

foods.forEach(function (food) {
  grill(food);
});

console.log(cookedFood);


console.log("//////////////////// OVERLY EXCITED ////////////////////");

// create a single JavaScript function named addExcitement 
// that will use console.log() to print out a sentence to the browser console.

const addExcitement = (sentence) => {
  console.log(sentence);
}

addExcitement("This is an exciting sentence.");


console.log("//////////////////// STACKING WORDS ////////////////////");

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// The addExcitement function should be an impure function, 
// and accept the array as the sole argument. 

let sentenceTree = (theWordArray) => {

  // Each time the for loop executes, you're going to add one more word to this string
  let buildMeUp = "";

  for (let i = 0; i < theWordArray.length; i++) {

    // Concatenate the new word onto buildMeUp
    buildMeUp += `${theWordArray[i]} `;

    // Print buildMeUp to the console
    console.log(buildMeUp);
  }
}

// Invoke the function and pass in the array
sentenceTree(sentence);

let sentence2 = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

let addExcitements = (theWordArray, punctuation) => {
  let buildMeUp = ""

  for (let i = 0; i < theWordArray.length; i++) {

    if (i % 3 == 2) {
      buildMeUp += `${theWordArray[i] + punctuation} `;
    }

    else {
      buildMeUp += `${theWordArray[i]} `;
    }

    console.log(buildMeUp);
  }
}

//  addExcitements(sentence2)


console.log("//////////////////// FUNCTION ARGUMENTS ////////////////////");

// using an asterisk 
addExcitements(sentence2, "*");