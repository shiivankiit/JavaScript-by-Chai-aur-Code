const tinderUser=new Object()//this is a singelton obj
console.log(tinderUser);

const tinderUser1={};//non-singelton object.
console.log(tinderUser1);

//Both of the above case is same.

const User={}
User.id="123abc"
User.name="Sammy"
User.isLoggedIn=false
console.log(User);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Tony",
            lastname:"stark"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

const obj3 = Object.assign({},obj1,obj2,obj4)//Object.assign(target,source)
console.log(obj3);
//It can also done using spread operator.
const obj5 = {...obj1,...obj2,...obj4}
console.log(obj5);

//Array of objects
const user=  [
{
    id:1,
    email:"microsoft@gmail.com"
},
{
    id:2,
    email:"google@gmail.com"
},
{
    id:3,
    email:"amazon@gmail.com"
}
]
user[1].email;
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty('isLoggedIn'));
console.log(user.hasOwnProperty('isLogged'));


//Destructuring.

const course={
    coursename:"js-in-hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor:instructor} = course;
console.log(instructor);

// const navbar=({company})=>{
// }
// navbar(company="hitesh")

{
    name:"hitesh"
}
