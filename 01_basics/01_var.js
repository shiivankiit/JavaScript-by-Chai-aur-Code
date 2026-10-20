//Revised the concept.
const accountId = 123456789; //once value is assing we cant change it now.
let accountEmail = "ankit@gmail.com";//block-scoped variable declaration ...re-assigned but not redclared
var accountpswd= "12345";//It is a global scope variable.
accountcity="Jaipur";//a variable can also be declared without let and const.
let accountstate;
console.table([accountId,accountEmail,accountpswd,accountcity]);

//Everything variable stored inside a memory.
/*
Prefer no to use var 
beacause of issues in block scope and functional scope. 
*/
//let and const both are blocked scope.
//account city creates a global variable.

//undefined--a variable is declare but not assigned any value.
//null--variable is explicitly define with null;
