// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld()
{
   return function(){
    return "Hello world";
   };
}
const hello=createHelloWorld();
console.log(hello());
console.log(hello(1,2,3,4));


