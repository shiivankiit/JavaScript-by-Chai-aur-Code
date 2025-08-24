// Concepts Covered in This Code
// Prototype & Prototype Inheritance
// Extending Built-in Objects (Object, Array, String)
// this keyword usage in methods
// Prototype Chain / Inheritance (__proto__, Object.setPrototypeOf)
// Custom methods for Strings (truelength)

let myName="hitesh   "

console.log(myName.truelength);//truelength does not exist initially in String prototype, so this will print undefined.

let myHeros=["thor","spiderman"]

let heropower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderpower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
//By adding function to Object.prototype,all object in js can acess it.
// This is called prototype inheritance because everything in JS ultimately inherits from Object.
Object.prototype.hitesh=function(){
    console.log(`Hitesh is present in all objects`);
}
//Only array will acess to hay hitesh
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

heropower.hitesh()//work bcz heropower is an object
myHeros.hitesh()//work bca array also inherit from the Object
myHeros.heyHitesh()//work bca heyhitesh added to the array
// heropower.heyHitesh() //erroe(heropower is not an array).


//inheritance
const User ={
    name:"chai",
    email:"chai@google.com"
}
const Teacher ={
    makeVideo:true
}
const TeachingSupport ={
    isAvalabel:false
}
const TASupport ={
    makeAssignment:'Js assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
//Ta support inherit from TeachingSupport.
//Teacher inherit from user
Teacher.__proto__=User
//Modern syntax
//Object.setPrototypeOf is a modern way of setting prototypes instead of __proto__.
Object.setPrototypeOf(TeachingSupport,Teacher)



let anotherUsername = "Chai aur code    "
String.prototype.truelength=function(){
     console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is :${this.trim().length}`);
}
anotherUsername.truelength() //"Chai aur code"->Length without spaces.
"sam".truelength() //length=3.
"iceTea".truelength() //length=6.