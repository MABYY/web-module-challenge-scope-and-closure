// Scope answers the question of where are my functions and variables available to me

// Global Variables
// if it's not inside of a function or block of code its global
// var is attached to the window object, let and const are not
// const cohort = 'web40';

/*
var
- can be redecleared
- can be reassigned
-function scoped

let
- cannot be redecleared
- can be reassigned
- block scoped

const
- cannot be redecleared
- cannot be reassigned
- block scoped

*/

// Function Scope

// when we name variables the same thing inside and outside of a function this is called a shadow variable, it's bad practice because if we ever wanted to access the variable on the global scope, now we can't.

// const track = 'web';

// function lambda(){
//   const cohort = 'web40';
//   const track = 'data science';
//   console.log(cohort);
//   console.log(track);
// }

// lambda();

// Block scope
// if(1 === 1){
//   var answer = true;
// }
// console.log(answer);

// for(let i = 0; i < 5; i++){
//   console.log(i);
// }

// console.log(i);

// const dog = 'Ada';

// function callDog(){
//   console.log(dog);
// }

// function puppy(){
//   const dog = 'Noa';
//   return callDog();
// }

// puppy();


// a better of doing this

// const dog = 'Ada';

// function callDog(dog){
//   console.log(dog);
// }

// function puppy(){
//   const dog = 'Noa';
//   return callDog('Fido');
// }

// puppy();


// BEST PRACTICES
// try not to create global varibales - can lead to bugs down the road - especially if more than 1 dev is working on a program.

// functions are scoped the exact same way variables are scoped

// function sayHi(name){
//   function yell(){
//    return name.toUpperCase();
//   }
//   return yell();
// }

// console.log(sayHi('Brit'));

// yell(); // yell only exists inside of sayHi

// functions are scoped to the parent function - so if you create a function inside of another - that function will only ever be available inside of its parent.

//HOISTING

// working();
// function declearation
// function working(){
//   console.log('its working!!!!!')
// }

// console.log(myName);
// var myName = 'Brit';
// console.log(myName);

// JavaScript works on a 2 pass compiler - on the first it sets up references, on the second it assigns values

// what this file does

// invoke all the functions a

// how does this file do it

// write all functions here


// Closures - when a function reaches outside of it's scope into the parent scope to access a variable

// give us the ability to put functions together
// its the ability to access functions from a parent level scope in a child level even after the parent function has been terminated
// code that's been identified else where that we can use later
// we have the ability to pass things down but we can't pass them back up
// lexical === belonging

// global
function country(countryName){
  // countries have their own rules and laws
  let lang1 = 'French';
  let lang2 = 'English'
  console.log(`${lang1} and ${lang2} are the offical languages of ${countryName}`);
  debugger;
  function province(provName){
    // provinces their own specific rules and laws
    // console.log(`${lang1} and ${lang2} are the offical languages of ${countryName} and the most populated province is ${provName} Montreal has better ${food} than NYC`);
    debugger;
    function city(cityName){
      // cities have their own rules and laws
      const food = 'pizza 🍕';
      console.log(`${lang1} and ${lang2} are the offical languages of ${countryName} the capital city is ${cityName} and Montreal has better ${food} than NYC!`);
      debugger;
    }// this closes city
    city('Ottawa');
  }// this closes province
  province('Ontario');
}// this closes country

country('Canada');


// function game(sport){
//   let score = 0;
//   return function win(){
//     score++; // incrementing score by 1
//      return `Your ${sport} game score is ${score}`;
//   }
// }


// // I can come down here and make a game

// const hockeyGame = game('hockey');

// console.log(hockeyGame());
// console.log(hockeyGame());
// console.log(hockeyGame());
// console.log(hockeyGame());

// const tennis = game('tennis');

// console.log(tennis());

/// create a function we want it return a random number betwen 1 and 5 // you can call this function score

// function score(){
//   return Math.floor(Math.random() * Math.floor(5));
// }


// Higher Order Functions / Callbacks
// higher order functions receive other functions as arugments
// callback functions are passed into other functions as arguments
// HOF receive / callback passed in

// // HOF
// const kitchen = function(ing1, ing2, chefCB){
//   return chefCB(ing1, ing2);
// }

// // callbacks
// const pizzaChef = function(ing1, ing2){
//   return `I took ${ing1} and ${ing2} and I made you a 🍕`;
// }

// const pastaChef = function(ing1, ing2){
//   return `I took ${ing1} and ${ing2} and I made you a 🍝`;
// }


// console.log(kitchen('sauce', 'dough', pizzaChef));
// console.log(kitchen('sauce', 'dough', pastaChef));


// create a function called totalGameScore - it should take score and hockeyGame as callbacks and it should return an array with the score for each period

// score function
function score(){
  return Math.floor(Math.random() * Math.floor(5));
}

// create a hockeyGame function

function hockeyGame(scoreCB){
  return {
    Home: scoreCB(),
    Away: scoreCB()
  }
}

console.log(hockeyGame(score));

function totalGameScore(scorecb, gamecb){
  const totalGame = [];
  let homeScore = 0;
  let awayScore = 0;

  for(let i = 0; i < 3; i++){
    const currentScore = gamecb(scorecb);
    homeScore = homeScore + currentScore.Home
    awayScore = awayScore + currentScore.Away
    totalGame.push(`Period ${i + 1}: Away: ${currentScore.Away} - Home: ${currentScore.Home}`);
  }
 return totalGame;
}

console.log(totalGameScore(score, hockeyGame));
