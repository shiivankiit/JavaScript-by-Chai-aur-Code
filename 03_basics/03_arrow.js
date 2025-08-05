const user={
      username:"hitesh",
      price:3999,

      welocmeMessage : function(){
     //   console.log(`${this.username},welcome to the website`);//this refer to current context.
     //   console.log(this);
        
      }
}
//context refer to the value.

user.welocmeMessage()
user.username="sam"
user.welocmeMessage()

//console.log(this);//here we are inside node enviornment so this refer to the empty object.

// function chai()
// {
//     console.log(this);
// }

// const chai= function(){
//     let username="hitesh"
//     console.log(this.username);
// }

// const chai=()=>{
//     let username="hitesh"
//     console.log(this.username);
// }//It is called explicit return.
//chai();

//const addTwo=(num1,num2)=> num1+num2
//implict  does not contain return keyword called implicit return.
const addTwo=(num1,num2)=>({username:"hitesh"})
console.log(addTwo(2,3));

//to return object we need to wrap them inside the paranthesis.





🔁 this in Regular Functions:
In a regular function, this refers to the object that called the function — which can change depending on the calling context.

js
Copy
Edit
const user = {
  username: "hitesh",
  welcomeMessage: function () {
    console.log(this.username); // 'this' refers to 'user' object
  }
};

user.welcomeMessage(); // hitesh

const test = user.welcomeMessage;
test(); // undefined (in strict mode) or window/global object (in non-strict mode)
🔁 this in Arrow Functions:
In an arrow function, this is lexically scoped — it does not have its own this. Instead, it inherits this from the surrounding scope at the time the function is defined.

js
Copy
Edit
const user = {
  username: "hitesh",
  welcomeMessage: () => {
    console.log(this.username); // 'this' does NOT refer to 'user'
  }
};

//Difference between Regular function and Arrow function.
// user.welcomeMessage(); // undefined
// So here, this.username is undefined because this is not bound to the user object but to the global object or enclosing scope, which does not have a username property.

// ✅ Object Method: Use Regular Function
// If you're writing a method inside an object and want to access the object's properties using this, always use a regular function.

// js
// Copy
// Edit
// const user = {
//   username: "sam",
//   welcomeMessage: function () {
//     console.log(`${this.username}, welcome!`);
//   }
// };
// ❌ Arrow Function as Method (Avoid)
// If you use an arrow function, this won’t point to the object:

// js
// Copy
// Edit
// const user = {
//   username: "sam",
//   welcomeMessage: () => {
//     console.log(`${this.username}, welcome!`); // 'this' is not user
//   }
// };
// ✅ Summary:
// Feature	Regular Function	Arrow Function
// Own this?	✅ Yes	❌ No (inherits from parent)
// Suitable for methods?	✅ Yes	❌ No
// Suitable for callbacks (with lexical this)?	❌ Sometimes tricky	✅ Yes, if you want lexical this
// Syntax	Verbose (need function)	Concise

