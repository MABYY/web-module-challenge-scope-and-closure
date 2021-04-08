// ### Task 3 - Stretch Goals

// After you have completed the requirements, **create** a new file called 
// `stretch.js` and practice more with closures. There are no tests for these problems.

// See if you can complete one or more of the following challenges:

// 1. Write a function that would allow you to do this using a closure. 
// (This is another interview question we've seen before - when you're ready for answers, 
// view an explanation [here]
// (https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

function createBase(num) {
    return function(N) {
        return num + N
    }
  }
  
var addSix = createBase(6);
  
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27


// 2. Research the differences between functional programming and object oriented programming. 
// Then, describe the pros and cons of functional programming vs object-oriented programming. 
// This is a common interview question and great practice!