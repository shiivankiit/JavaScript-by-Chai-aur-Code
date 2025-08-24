const user={
    username:"sam",
    logginCount:8,
    signnedIn:true,
    
    getUserDetails:function(){
        console.log("Got user Details from Database");
        console.log(`Username:${this.username}`);
        console.log(this);
        
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

//Constructor Function.:Geaves you a new instance and a copy
//const promiseOne=new Promise();
const date = new Date();

function User(username,logginCount,signnedIn){
      this.username = username;
      this.logginCount=logginCount;
      this.signnedIn=signnedIn;
      
      this.greeting = function(){
        console.log(`Welcome ${this.username}`);
      }
      return this
}
const UserOne=new User("hitesh",12,true);
const userTwo=new User("sam",12,false);
console.log(UserOne);
console.log(userTwo);

//new keyword create a empty object called instance 
//constructor function called new Keyword.

//we get new keyboard acess from the prototype.

