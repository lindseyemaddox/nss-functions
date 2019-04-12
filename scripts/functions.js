
console.log("hello there functions");

// Write a program that prints the numbers from 1 to 100
// For multiples of five print "Chicken" instead of the number
// for the multiples of seven print "Monkey"
// For numbers which are multiples of both five and seven print "ChickenMonkey"

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


