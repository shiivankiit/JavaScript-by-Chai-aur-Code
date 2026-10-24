//let a=10;
//const b=20;
//var c=30;
//currly braces is called scope.
{}
// console.log(a);
// console.log(b);
// console.log(c);

//var c=300
let a =300
 if(true)
 {
    let a=10
    const b=20
   // console.log("Innner:",a);
    
 }

//---------------------------Part-2-----------------.

//console.log(a);
//  console.log(b);
//  console.log(c);
 
function one()
{
   const username="youtube"

   //two fn can acess the variable from the outer fn.
   //but outer fn can't acess the variable from the inner fn.
   function two()
   {
      const website="youtubee"
      console.log(username);
   }
   //console.log(website); //we can't acess it outside the scope.
   two();
}
one();
//In nested function child function are able to acess the variable of the parent function.
 
// How scope wroks inside if-else.
if(true)
{
   const username="hitesh" 
   if(username==="hitesh")
   {
     const website="youtube"
     console.log(username + website);  
   } 
   //You get an error bcz webiste is avilable inside inner fn.
   //console.log(website);
}
//console.log(username); -- You can not acess it outside the scope.

//++++++++++++++++++++++++++++++++++Intresting+++++++++++++++++++++++.

//Hoisting. where fn stores completly in phase-1 of memor creation phase.
addOne(5);
function  addOne(num){
   return num+1;
}

// Function expression.
addTwo(5);
const addTwo=function(num){  //sometimes it's called expression 
   return num+2;
}
