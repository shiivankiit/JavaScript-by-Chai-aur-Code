function setusername(){
    //complex db calls
    this.username=username
}
function createUser(username,email,password) //createUser is like a constructor
{
    setusername.call(this,username)
    this.email=email
    this.password=password
}
const chai=new createUser("chai","chai@fb.com","123")
console.log(chai);

//Explore it on gpt.
// .call() is a method available on every function in JavaScript.
// It lets you manually set the value of this when calling a function.


// But if you just did:

// setusername(username)
// then this inside setusername would be:
// undefined (in strict mode), or
// the global object (in sloppy mode).
// Either way, it would not set the property on the new user you’re creating.


// setusername.call(this, username)
// → This means: “Call setusername, but force this inside it to be the current object being constructed (createUser’s instance).”


// The work of .call here is:
// To invoke setusername
// And make sure that this inside setusername points to the same object being created by createUser.
// Without .call(this, username), the username property would not be added to your chai object.