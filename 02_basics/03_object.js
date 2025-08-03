// Object can be declare in two ways
//1--Constructor    2--literal.

//costructor se ---->singelton banega.
//aur literals se nahi banega.

//Object Literals.
const mySym = Symbol("key1")
const JsUser = {
    name:"sam",
    "full name":"tony stark",
    [mySym]:"mykey1",
    age:18,
    loaction:"Jaipur",
    email:"google@gmail.com",
    isloggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
//all key:value track as a string.
console.log(JsUser.name);
console.log(JsUser["fullName"]);
console.log(JsUser["age"]);
console.log(JsUser[mySym]);
console.log(typeof mySym);



//changing the value
JsUser.email="microsoft@gmail.com";
//Object.freeze(JsUser);//now we cant change the value of JsUser
console.log(JsUser);

//Now we are adding the function inside object and we can treat it as a variable.
JsUser.greeting=function(){
    console.log("Hello Js user");
}
console.log(JsUser.greeting());
JsUser.greetingTwo=function(){
    console.log(`Hello Js user ${this.name}`);//when you want to refer to the same object use this keyword.
}
console.log(JsUser.greetingTwo());

