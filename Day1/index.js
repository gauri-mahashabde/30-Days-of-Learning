//Write a function createHelloWorld. It should return a new function that always returns "Hello World".
//solution 1
var createHelloWorld = function() {
    return () => "Hello World";
};
