/*//Ways to show output using node
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
//P.S.-Removing and creatitng directory can be used with Sync as well according to use 

//Creating our Server
var http = require('http');
var server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello There!!');
});

server.listen(5000,'127.0.0.1'); 

//Readableand Writable  Stream
var fs = require('fs');
var readStream = fs.createReadStream(__dirname + '/demo.txt');
var writeStream = fs.createWriteStream(__dirname + '/demowrite.txt');
var chunk_count = 0;
readStream.on('data',function(d){
    //console.log('This is the read data'+ d);
    writeStream.write(d);
    chunk_count++;
    console.log(chunk_count);
});*/

var fs = require("fs");
var http = require("http");

var server = http.createServer(function (request, response) {
  if ((request.url === "/home") | (request.url === "/")) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("This is the home page");
  } else if (request.url === "/profile") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("This is profile page");
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/error.html").pipe(response);
  }
  //response.writeHead(200, { "Content-Type": "text/html" });
  //var rS = fs.createReadStream(__dirname + "/index.html");
  //rS.pipe(response);
});
server.listen(5000, "127.0.0.1");
