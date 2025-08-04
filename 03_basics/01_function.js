function name()
{
    console.log('H');
    console.log('I');
    console.log('T');
    console.log('E');    
}
//console.log(name());


//sum of two no

// function addTwoNumber(num1,num2) //num1 nad num2 are parameter.
// {
//   console.log( num1+num2);
// }

function addTwoNumber(num1,num2)
{
    let result=num1+num2
    return result;
}
const result = addTwoNumber(3,4);//while 3 and 4 are argument.
//console.log("Result is ",result);

function loginUser(username)
{
    if(username===undefined)
    {
        console.log("Please enter a username");
        
    }
   return `${username} just logged in`;
}
console.log(loginUser("sam"));
console.log(loginUser());
//when you doesn't pass anything argument it geaves you undefined. 

//Creating a cart.

function calculatePrice(val1,val2,...num1)//here ...num1 is called rest operator.
{
    return num1;
}
console.log(calculatePrice(200,400,500,2000));


const user = {
    username:"hitesh",
    price:199
}
function handelObj(anyObj)
{
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}
//handelObj(user);

handelObj({
    username:"sam",
    price:399
})//You can also pass username and price as an argument .

const myNewarr=[200,400,500,600]
function returnscndvalue(getarr)
{
   return getarr[1];
}
//console.log(returnscndvalue(myNewarr));
console.log(returnscndvalue([200,300,400,500,600]));

