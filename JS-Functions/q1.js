// 1.  Write a function that prints "Hello World".
// function statement
function greet1(){
    console.log("Hello world 1");
}

greet1();

// function expression
var a = function greet2(){
    console.log("Hello world 2");
}

a();


// fat arraow function
var greet3 = () => console.log("Hello World 3");

greet3();