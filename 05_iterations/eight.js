const myNums=[1,2,3,4]
// const myTotal= myNums.reduce(function(acc,curval){
//     console.log(`acc:${acc}and curval is ${curval}`);
//     return acc + curval
// },0)
// console.log(myTotal);
const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:3999
    },
    {
        itemName:" web3 course",
        price:3999
    },
    {
        itemName:" Analyst course",
        price:3999
    }
]

const pricetoPay=shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(pricetoPay);


