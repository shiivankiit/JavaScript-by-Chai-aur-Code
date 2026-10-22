// array
//Array is a non-primitive data type and stored inside a heap memory and the refrence of the array 
// is stored inside the stack memory.

const myArr=[0,1,2,3,4,5];
const myHeroes=["tony","captian america","hulk"];

const myArr2=new Array(1,2,3,4); //New way to create an array.
console.log(myArr[3]); //Geaves you the 4th elem of the array and indexing starts from 0.

//Array Methods.

myArr.push(6)//adding an elem to the array.
myArr.pop()//removes the last elem of the array.
myArr.unshift(5)//add the elem to the start of the array.
myArr.shift()//removes an elem form the start of the array.
console.log(myArr.includes(6));
console.log(myArr.indexOf(3));
console.log(myArr);

const newArr=myArr.join();//joins the elem into one string using a comma by default.
//join("") or join("-")lets you choose the seprator.
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



//slice() extracts a portion of an array and returns a new array without modifying the original
// while splice() modifies the original array by adding, removing, or replacing elements.





