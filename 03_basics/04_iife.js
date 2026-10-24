//Immediately invoked Function Expression(IIFE).
//We use it mostly in DB connection when we need data instantly when program started. 
//we use iife bcz global scope se pollution hoti ha kai bar to us polution ko hatane ke liye 
//humne iife use kiya hai.

//named iife
(function chai(){
    console.log(`DB CONNECTED `);
}) ();//In iife semicolon is compulsary bcz it does not know where they need to stop.

//simple iife.
((name)=>{
   console.log(`DB CONNECTED TO ${name}`);
})('hitesh')

//When you write two iife in a single file always remember to put semicoln to execute the next function.


