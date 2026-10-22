// Write the code.

//Reverse [1,2,3,4,5] without using reverse(),using a loop.

let rev=[1,2,3,4,5]
let arr=[];
for(let i=rev.length-1;i>=0;i--){
    arr.push(rev[i]);
}
console.log(arr);

// C2. Find the largest number in [4, 9, 2, 15, 7] 
// using a loop. Then do it again with Math.max.

let array=[4,9,2,15,7];
let maxValue=array[0];

for(let i=0;i<array.length-1;i++){
    if(array[i]>maxValue){
        maxValue=array[i];
    }
}
console.log(maxValue);

// C3. Remove duplicates from [1, 2, 2, 3, 3, 3, 4] using includes() and push().

const nums = [1, 2, 2, 3, 3, 3, 4];
const unique = [];
for (let i = 0; i < nums.length; i++) {
  if (!unique.includes(nums[i])) unique.push(nums[i]);
}
console.log(unique);  

//C4. Rotate [1, 2, 3, 4] by moving the first element to the end, 
//using shift and push. Expected: [2, 3, 4, 1].

const arr1=[1,2,3,4];
let value=arr1.shift();
arr1.push(value);
console.log(arr1);
