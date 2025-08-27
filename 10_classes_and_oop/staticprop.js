class User {
    constructor(username){
        this.username=username
    }
    logMe(){
    console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
//console.log(hitesh.createId())
// Creates an object: User { username: 'hitesh' }.
// The commented line would throw an error because createId is static → only available on the class, not on the object.

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone= new Teacher("iphone","i@phone.com")
console.log(iphone);
console.log(iphone.createId);//undefined

// console.log(User.createId());     // works → "123"
// console.log(Teacher.createId()); 







// A static method.
// Important: static methods belong to the class itself, not to the instances.
// That means you can call it as:
// User.createId()   // ✅ works
// But not:
// const u = new User("abc")
// u.createId()   // ❌ Error: not a function