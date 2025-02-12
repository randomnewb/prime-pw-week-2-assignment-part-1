// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = "Tu";
// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = "Nguyen";
// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
let fullName = firstName + " " + lastName;
// 4 - Console log the value of `fullName`
console.log(fullName);
// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber = 13;
// 6 - Console log this sentence, adding in the variables you created above: 
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.
console.log("My name is " + fullName + " and I think" + " " + luckyNumber + " is a winner!")

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)

let adventurous = false;

// 8 - Create a variable named `food`, and set its value to a string of your favorite food

let food = "pizza";

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have

let pets = 100;

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has

let friendsPets = 3;

// 11 - Add two pets to your `pets` variable

pets += 2; 

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice

const allowedPets = 200;

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!", 
// if it's not true, console log "How about we stay home?"

if (adventurous) {
console.log("Adventures are great!");
} console.log("How about we stay home?");

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if (luckyNumber === 2 && (adventurous)) {
    console.log("Roll the dice!");
} console.log("Let's not roll the dice.");

// 15 - Write a conditional that console logs "I can have more pets!" 
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.


function checkPets (){
if (pets < allowedPets) {
    console.log("I can have more pets!");
} else if (pets === allowedPets) {
        console.log("I have enough pets");
    } else if (pets > allowedPets) {
        console.log("Oh no, I have too many pets!");
    }
}
console.log(pets);
checkPets();

pets = allowedPets;
console.log(pets);
checkPets();

pets ++;
console.log(pets);
checkPets();

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios. 
// console.log `mostPets` after the conditional has run.

//Create a mostPets variable for the function below
let mostPets = 0;

//Create a function called morePets that takes two inputs
function morePets (pets,friendsPets) {
if (pets > friendsPets) {
    mostPets = pets; }
    else if (pets === friendsPets) {
        //just choose first variable if numbers are the same
            mostPets = pets;
        //log the 'same amount' message as a confirmation
            console.log("We both have the same amount of pets!"); }
    else if (pets < friendsPets) {
        mostPets = friendsPets;
        } console.log (mostPets);
    }

//Test all 3 cases
morePets(100,3);
morePets(5,5);
morePets(1,2);

// 17 - Write a *switch* statement that logs:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, log "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!

//create a variable to hold our message
let luckyMessage = "";

//create a function that takes one argument, 
//changes luckyMessage to the appropriate message depending on the case, 
//and console logs the message
function luckyMsgMaker (luckyNumber){
switch(luckyNumber) {
case 1:
    luckyMessage = "First is the worst"; //if our lucky number is 1, set our message variable to the text
    break;
case 2:
    luckyMessage = "Second is the best";
    break;
case 3:
    luckyMessage = "Third is the one with the polka dot dress";
    break;
default:
    luckyMessage = "Luck is what happens when preparation meets opportunity";
    }
    console.log(luckyMessage);
}


//log the appropriate message based on the case
luckyNumber = 1;
luckyMsgMaker(luckyNumber);

luckyNumber = 2;
luckyMsgMaker(luckyNumber);

luckyNumber = 3;
luckyMsgMaker(luckyNumber);

luckyNumber = 13;
luckyMsgMaker(luckyNumber);

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!

// Create a conditional: if adventurous is true, console log "Adventures are great!", 
// if it's not true, console log "How about we stay home?"
let adventurousMessage = "";
adventurousMessage = (adventurous) ? "Adventures are great!" : "How about we stay home?";

//log the proper message
console.log(adventurousMessage);