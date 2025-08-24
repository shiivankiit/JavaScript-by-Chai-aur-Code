function multiplyby5(num){
    return num*5;
}
multiplyby5.power=2
console.log(multiplyby5(5));
console.log(multiplyby5.power);//function are also object.
console.log(multiplyby5.prototype);
//Every function in js automatically gets a special property called .prototype
//This is used when you  create object with new keyword(constructor function).
//By default it is just an empty object 

function createUser(username,score){
    this.username=username
    this.score=score
}
createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}
const chai= new createUser("chai",25);
const tea= new createUser("tea",250);

chai.printMe()

/*

 */