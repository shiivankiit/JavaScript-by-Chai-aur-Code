const coding=["js","ruby","java","python","cpp"]

//In callback function we did not gave a name to the function.
// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach((item)=>{
//    console.log(item);
// })

function printMe(item)
{
    console.log(item);
}
coding.forEach(printMe)

//for getting all the info of array we need to pass the 
//whole parameter 
coding.forEach((item,index,arr)=>{
     console.log(item,index,arr);
})

//++++++++++++++++++++++++++++++++++++++++++++++++++++++//

const myCoding=[{
    languageName:"Javascript",
    languageFileName:"Js"
},
   { languageName:"Java",
    languageFileName:"Java"
},
    {languageName:"Python",
    languageFileName:"Py"
},
]
myCoding.forEach((item,index,arr)=>{
        console.log(item,index,arr);
})
//we can also acess individual file name.