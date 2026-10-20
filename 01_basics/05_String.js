const name="Andrew";
const repoCount=50;

//Concatination of string using ``
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// That is a String object (also called a String wrapper object). It is created by calling the String constructor 
// function with the new keyword.
const gameName=new String ('hiteshhc')
console.log(gameName[0]);//Accesing the key value pair here.
 console.log(gameName.__proto__);//Geaves you the obj.
 
console.log(gameName.length);//Acessing the lenght of string
console.log(gameName.toUpperCase());//Cnvrt the string to the uppercase.
console.log(gameName.charAt(3));//Geaves you the position of the character.

const newString=gameName.substring(0,4);//geaves you the part of a string.
//0 is a start no and 4 is end no which is excluded.
console.log(newString);

//Starts from the reverse 
const anotherString=gameName.slice(-8,4);
console.log(anotherString);

//Removes the space from the string from the starting and end of the string.
const newStringOne = "    hitesh   ";
console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh%20choudary"
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));

console.log(gameName.split('-'));


 
