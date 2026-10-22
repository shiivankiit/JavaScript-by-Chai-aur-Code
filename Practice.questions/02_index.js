//Write the code.

// B1. Start with const heroes = ["tony", "captain america", "hulk"];. 
// Add "thor" at the end and "loki" at the start. 
// Then remove "hulk" using indexOf and splice. Print the final array.

const heroes=["tony","captain america","hulk"]
heroes.push('thor');
heroes.unshift('loki');
console.log(heroes);
const i=heroes.indexOf('hulk');
heroes.splice(i,1);
console.log(heroes);


// B2. Given const nums = [1, 2, 3, 4, 5, 6, 7, 8];, 
// get the last 3 elements into a new array without changing nums.

const nums=[1,2,3,4,5,6,7,8];
const newarr=nums.slice(5,8);
console.log(newarr);
console.log(nums);


// B3. Given const nums = [1, 2, 3, 4, 5];, 
// remove the first two elements using splice and store them in a new variable.

const nums1=[1,2,3,4,5]
nums1.splice(0,2)
console.log(nums1);

// B4. Given const heroes = ["tony", "hulk"];
// print "Found" if "hulk" is in the array, otherwise "Not found".

const heroes1=["tony","hulk"]
if(heroes1.includes("hulk")){
    console.log('found');
}else{
    console.log('not found');
}

// B5.Convert [1, 2, 3, 4] into the string "1 2 3 4".

const nums2=[1,2,3,4]
nums2.join("");
console.log(nums2);

//B6. Given const a = ["tony", "hulk", "thor"];
//insert "spiderman" at index 2 using splice without deleting anything.

const a = ["tony","hulk","thor"];
a.splice(2,0,'spiderman');
console.log(a);

