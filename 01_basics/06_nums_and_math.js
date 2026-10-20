const score=400;
console.log(score);

//Here you are already define the data-type of a balance.also called the object.
const balance = new Number(100);
console.log(balance);
console.log(typeof balance);

console.log(balance.toString().length);//geaves you the no of character.
console.log(typeof balance);
console.log(balance.toFixed(1));//geaves you the no in decimal point.also called precision value.
const otherNumber=23.8966
console.log(otherNumber.toPrecision(3));

const hundreds =100000;
console.log(hundreds.toLocaleString('en-IN'));


//++++++Maths++++++++++++.
//It is also a object whihc contains lot's of properties.
console.log(Math.abs(-4));//cnvrts the -sign into positive.
console.log(Math.round(4.6));//round off the value.
console.log(Math.ceil(4.2));//round off to the heighst value.
console.log(Math.floor(4.9));//round off to lowest value.
console.log(Math.min(4,3,6,7,8));
console.log(Math.max(8,9,5,3,5));

console.log(Math.random());//always come betwn 0s and 1s.
console.log((Math.random()*10)+1);//0 to 9
console.log(Math.floor(Math.random()*10)+1); 

//When you want a random no in a range use this formula.
const min=10;
const max=20;
console.log (Math.floor(Math.random()*(max-min+1))+min);


// Explanation of the above formula.

// Math.random() returns a decimal from 0 up to, but not including, 1. For example 0.7314.
// (max - min + 1) is the size of the range: 20 - 10 + 1 = 11. There are 11 possible numbers (10, 11, ..., 20).
// Math.random() * 11 gives a decimal from 0 up to just under 11. For example 0.7314 * 11 = 8.04.
// Math.floor(...) rounds down to a whole number from 0 to 10. For example 8.04 becomes 8.
// + min shifts the range up to start at 10, so 8 + 10 = 18.














