class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends User{
     constructor(username,email){
        super(username)
        this.email = email
        this.password=this.password
     }

     addCourse(){
      console.log(`A new course was added by ${this.username}`);
        
     }
}
const chai= new Teacher("chai","chsi@123.com","666565")
chai.addCourse();
chai.logMe()

const masalachai = new User("masalaChai")
masalachai.logMe()

