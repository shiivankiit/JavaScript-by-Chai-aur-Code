// array

const myArr=[0,1,2,3,4,5];
const myHeroes=["tony","captian america","hulk"];

const myArr2=new Array(1,2,3,4);
console.log(myArr[3]);

//Array Methods.

myArr.push(6)//adding an elem to the array.
myArr.pop()//removes the last elem of the array.
myArr.unshift(5)//add the elem to the start of the array.
myArr.shift()//removes an elem form the start of the array.
console.log(myArr.includes(6));
console.log(myArr.indexOf(3));
console.log(myArr);

const newArr=myArr.join();//cnvrts the value into string.
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//slice ,splice
console.log("A ",myArr);
const myn1=myArr.slice(1,3);//returns a part of the array.no change in original array.
console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3)//makes a change in original array.
console.log("C ",myArr);
console.log(myn2);









