
console.log("hello there functions");

// Write a program that prints the numbers from 1 to 100
// For multiples of five print "Chicken" instead of the number
// for the multiples of seven print "Monkey"
// For numbers which are multiples of both five and seven print "ChickenMonkey"

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
  console.log(currentNumber);
  // divide by 5, and check for remainder of 0
  if (currentNumber % 5 === 0) {
      console.log("chicken");
  }
  // divide by 7, and check for remainder of 0
  if (currentNumber % 7 === 0) {
    console.log("monkey");
  }
  // same thing for both 5 and 7
  if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
    console.log("chickenmonkey");
  }
}

