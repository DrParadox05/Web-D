/* //Ways to show output using node
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

//Event emitter
var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('publishVideo',function(mess){
    console.log(mess);
});

emitter.emit('publishVideo',"ABC has posted a new video"); 

//Reading and writing files
// 1- Synchronous
var fs = require('fs');
var r = fs.readFileSync('demo.txt','utf8');
fs.writeFileSync('demo.txt', 'This is some new text');
console.count(r)

// 2- Asynchronous
fs.readFile('demo.txt','utf8',function(err,data){
    console.log(data);
});
console.log('Hey There!'); 

//Creating and Removing Directories
var fs = require('fs');
fs.unlink('demo.txt'); //Removes the demo file
fs.mkdir('demo'); //Creates a direcatory
fs.rmdir('demo'); //Removse a directory 
//Removing and creatitng directory can be used with Sync as well according to use */