const userEmail = []

if(userEmail)
{
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

//Falsy value.
// false,0,-0,BigInt 0n,"",null,undefined,NaN
//Truthy value.
//"0",'false'," ",[],{},function(){}

if(userEmail.length===0)
{
    console.log("Array is empty");
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}
//Nullish Coalescing Operator(??):null undefined,made for null and undefined 
//it's basically used in database
let val1;
val1=5 ?? 10 //first value get assigned
val1=null ?? 10 //first value get assigned
val1=undefined ?? 15  //first value get assigned
val1=null ?? 10 ?? 20

console.log(val1); 

//Ternary Operator.
// condition ? true :false

const icePrice = 100
icePrice <= 80 ? console.log("less than 80"):console.log("more than 80");