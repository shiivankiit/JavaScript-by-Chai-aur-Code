let score="33";
console.log(typeof score);
console.log(typeof (score));
//converting string to a no.
let valueInnumber = Number(score);
console.log(typeof valueInnumber);
console.log(valueInnumber);

//Example-2
let score1="33abc";
console.log(typeof score1);
console.log(typeof (score1));

let valueInnumber1 = Number(score1);
console.log(typeof valueInnumber1);
console.log(valueInnumber1);


let value1= true;
console.log(typeof value1);
let cnvrtvalue=Number(value1);
console.log(typeof cnvrtvalue);
console.log(cnvrtvalue);

//"33"=>33
//"33abc"=>Nan
// true=1,false=0;

let isLoggedIn=1;
let boolisloggedIn=Boolean(isLoggedIn);
console.log(boolisloggedIn);

//1=>true 0=>false.

let someNo= 33;
let stringNumber= String(someNo);
console.log(stringNumber);
console.log(typeof stringNumber);


//************************Operations*************************//
let value = 3
let negValue=-value;
console.log(negValue);//-3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1="hello";
let str2="hitesh";
let str3=str1+str2
console.log(str3);//hello hitesh

console.log("1"+2);//here conversion depend on first priority.
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(+true);
console.log(+"");

let gameCounter=100;
++gameCounter;//prefix
console.log(gameCounter);
gameCounter++;//postfix
console.log(gameCounter);














