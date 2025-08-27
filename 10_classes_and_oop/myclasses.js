//ES6

class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUppercase()}`
    }
}
const chai = new user("chai","chai@gmail.com","chai467")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


//behind the scene

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
