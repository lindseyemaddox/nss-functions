
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
  for (let bandNumber = 1; bandNumber >= 1; bandNumber++) => i
  // forEach bandNumber (restArgs.length);
}



const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console