const myObj={
    js:'Javascript',
    cpp:'C++',
    rb:"ruby",
    java:"Java"
}

for(const key in myObj)
{
    console.log(`${key} shortcut is ${myObj[key]}`);
}

const myArray=["js","cpp","java","rust","nodejs"];
//This loop will only take out the key values.
for(const key in myArray)
{
 console.log(`${key} language is ${myArray[key]}`);
}

//Difference between Object and array .
//Ans:- In array key is already defined while in object
//we can set the key values.