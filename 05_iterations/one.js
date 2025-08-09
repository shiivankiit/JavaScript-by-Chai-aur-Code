//for

// for(let index=0; index<10;index++)
// {
//     const element = index;
//     if(element==5){
//         console.log("5 is best no");
//     }
//     console.log(element);    
// }

//Loop inside loop
for(let i=0;i<=10;i++)
{
    console.log(`Outer loop value is ${i}`);
    
    for(let j=0;j<=10;j++)
    {
         console.log(`Inner loop value is ${j}`);
    }
}
//Array.
let myArray = ["flash","batman","superman"]
console.log(myArray.length);
for(let index=0;index<myArray.length;index++)
{
    const element = myArray[index];
    console.log(element);    
}

//Break and continue.
// for(let i=1;i<=20;i++)
// {
//     if(i==5)
//     {
//         console.log('Got the value');
//         break;
//     }
//     console.log(`value of i is ${i }`);
// }

//continue
for(let i=1;i<=20;i++)
{
    if(i==5)
    {
        console.log('Got the value');
        continue;
    }
    console.log(`value of i is ${i }`);
}

