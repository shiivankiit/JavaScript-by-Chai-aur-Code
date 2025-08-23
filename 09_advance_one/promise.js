const promiseOne= new Promise(function(resolve,reject){
     //Do async task or make a Db call etc.
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
});  
//resolve is conected to .then
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
     setTimeout(function(){
        console.log("Async task 2");
        resolve()
     },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
         resolve({username:"Chai aur code",email:"chai aur code.com"})
    },1000)
})
promiseThree.then(function(user){
     console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=false;//true
    if(!error){
        resolve({username:"hitesh",password:"123"})
    }else{
        reject('Error:Something went wrong')
    }
  },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
  console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("the proise is either resolve or rejected") 
)

const PromiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"sam",password:"123"})
        }else{
            reject('Name went something went wrong')
        }
    },1000)
});
async function consumePromiseFive()
{
    try {
    const response = await PromiseFive
    console.log(response);
    } catch (error) {
    console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers(){
//      try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//      } catch (error) {
//         console.log("E:",error);
//      }
// }
// getAllUsers();

//The global fetch method start the process of fetching a resource
//from the netwrok,returning  a promise which is fulfilled once the
//response is avilabel.

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
  console.log(error);
})