//Ways to show output using node
console.log('Hello There');

setTimeout(function(){
    console.log('Times Up')
},3000);

//Function Expressions
// 1- Normally defining a function
function displayMessage(){
    console.log('This is a normal functiion');
}
displayMessage();

// 2- Using function expression
var funcExp = function(){
    console.log('This is function Expression');
}
funcExp();

// 3- Creating 2 functions and using result of one in another
var getSq = function(num){
    return num*num;
}

var getDouble = function(n){
    return 2*n;
}

console.log(getSq(getDouble(10)));
console.log(getDouble(getSq(10)));

//Modules
var calcSq = require('./square')

calcSq(10);

//Multiple modules(multiple functions in a module)
var math = require('./math')

math.calcSqr(10);
math.calcCube(5);