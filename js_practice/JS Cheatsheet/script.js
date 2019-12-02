// Function declaration is a basic function. Function declarations are hoisted while function expressions are not. If you were to move the function below where it is called, i.e. [greet();], the function will still work. 
function greet() {
    console.log("Howdy");
}

// A function expression is when you store a function inside a variable. NOT hoisted. Function expressions are generally more useful as they provide a logical flow to your code.

// Whatever is declared within the function() parenthesis is a local variable that can be used inside the proceeding code block. 'name' in this instance is a function parameter, and is scoped to the function. 
const speak = function(time = 'night', name = 'luigi') {
    console.log(`Good ${time} ${name}`);
};

// In this instance, 'mario' is an argument. Arguments and parameters need to be ordered correctly when called-
// (time = 'morning', name = 'mario')

speak ('morning', 'mario');

// Within the parameters, you can set default values that are used if no arguments are called. (time = 'night', name = 'luigi')

speak(); /* logs Good night luigi*/
speak('day', 'jeff')
speak('evening', 'rachel')

// While creating locally scoped functions is useful, you need a way to access the returned value from the function. This can be done with the return keyword. 

const calcArea = function(radius) {
    let area = 3.14 * radius**2;
    return area;
}

// This can be refactored as such: const calcArea = function(radius) {
//     return 3.14 * radius**2;
// }


// The returned value can be stored in a variable as such- 


// Circle and sphere calculator
const circleSqIn = Math.floor(calcArea(6));
console.log("You would have a " + circleSqIn + " square inch circle");



const circleVolume = function(vol) { 
    let volume = (4/3) * Math.PI * Math.pow(vol, 3);
    return volume;
}

console.log(Math.floor(circleVolume(6)) + " cubic inches"); /* 6 here is the radius of the sphere. Corresponds to vol in circleVolume */

// Arrow functions

const calcAreaArrow = radius => 3.14 * radius **2;

// Methods and functions are essentially the same, the main difference is how we call them and where they are defined.about-band-image

// Function
const greeting = () => 'hello';

let resultOne = greet();

// Method

name.toUpperCase();

// Because we invoke the function using .notation, it is a method. Methods are functions that are associated with data types, objects, or strings. 

// Callbacks are a way to make sure certain code doesn't execute 