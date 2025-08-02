//Primitive type
//7 types :String,Number,Boolean,null,undefined,Symbol,BigInt.

const score=100;
const scoreValue=100.23;

const isLoggedIn=false;
const outsideTemp=null;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);

const bigNo=275678533746537865n;


//Refrence(Non-primitive)
//Arrays,Objects,Functions

const heroes=["shaktiman","naggraj","doga"];
let myobj={
    name:"hitesh",
    age:20,
}
const myFunction=function(){
    console.log("Helloworld");
}


//+++++++++++++++++++++++++++++++++++++
//Two types of memory is there.
//Stack(Primitive) and Heap(Non-primitive types)
//Stack geaves you the copy of the memory while heap geaves you the refrence of the memory.
let myYoutubeName="xyz@.com"
let anotherName=myYoutubeName
anotherName="chai aur code"
console.log(myYoutubeName);
console.log(anotherName);


let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="sam@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
 

