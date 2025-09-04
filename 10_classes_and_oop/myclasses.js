//ES6

class user{
    //constructor is a special method that runs automatically when object is created with new user(...)
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new user("chai","chai@gmail.com","chai467")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


//behind the scene
//It is called a constructor function...When you call it with new User, it creates a new Object.
function User(username,email,password){ 
       this.username=username
       this.email=email
       this.password=password
}
User.prototype.encryptPassword=function(){
    retrun `${this.password}abc`
}

const tea = new User("tea","tea@gmail.com","123")
console.log(tea.encryptPassword());
