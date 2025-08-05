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
 //console.log(a);
//  console.log(b);
//  console.log(c);
 
function one()
{
   const username="youtube"

   function two()
   {
      const website="youtubee"
      //console.log(username);
   }
   //console.log(website); we can't acess it outside the scope.
   two()   
}
//one()
//In nested function child function are able to acess the variable of the parent function.
 
if(true)
{
   const username="hitesh" 
   if(username==="hitesh")
   {
     const website="youtube"
     console.log(username + website);  
   } 
   //console.log(website);
}
//console.log(username);

//++++++++++++++++++++++++++++++++++Intresting+++++++++++++++++++++++.

addOne(5);
function  addOne(num){
   return num+1;
}

addTwo(5);
const addTwo=function(num){  //sometimes it's called expression 
   return num+2;
}
