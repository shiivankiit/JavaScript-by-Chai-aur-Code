class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value //underscore shows that we are defining the private parties.
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value.toUpperCase()
    }
}
const hitesh = new User("hitesh@ai","abc")
console.log(hitesh.password);
console.log(hitesh.email);