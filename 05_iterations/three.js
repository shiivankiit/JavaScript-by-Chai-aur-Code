// for of loop.

// [" "," "," "]
// [{},{},{}]

const arr=[1,2,3,4,5]

for(const num of arr)
{
    console.log(num);
}

const greetings = "Hello,world";
for(str of greetings)
{
    console.log(`Each char is ${str}`);
}

//Maps:Just like array.

const map = new Map() //map is an object hold key value pair and it hold key:value pair and maintain their order.
map.set('IN',"India")
map.set('USA',"United state of america")
map.set('Fr',"France")

for(const [key,value] of map){
    console.log(key,':-',value);
}
//Object 
const myObj={
    'game1':'NFS',
    'game2':'Spiderman'
}
for(const [key,value] of myObj)
{
    console.log(key,':-',value);
}
//Here object is not iteratabel there are different ways to iterate them.