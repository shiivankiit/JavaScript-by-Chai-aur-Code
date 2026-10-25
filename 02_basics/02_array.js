const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// Change push to ...dc_heroes inside it (marvel_heros.push(...dc_heroes)). 
// What is marvel_heros.length now, and what does marvel_heros[3][1] give?
marvel_heros.unshift(dc_heroes);
console.log(marvel_heros);

marvel_heros.push(...dc_heroes); //1st method to join the array and nested array creted.
console.log(marvel_heros);
console.log(marvel_heros[3][1]);//flash

const new_arr = marvel_heros.concat(dc_heroes); //combines two arr into singel one.
console.log(new_arr);
console.log(new_arr.length);


//spread operator:using it we can also combine two array.

const all_new_heros = [...marvel_heros, ...dc_heroes];
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
const uniqueArry=[...new Set(real_another_array)];
console.log(uniqueArry);
console.log(real_another_array);

console.log(Array.from("IronMan")); //cnvrt into array.
console.log(Array.from({ name: "Hulk" })); // explore it later

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //makes the combination of elem into array.
// The correct answer is Array.of(7) gives [7], Array(7) gives 7 empty slots.Array.of always makes an array from the values you pass, so Array.of(7) is [7].
//The Array constructor treats a single number as the length, so Array(7) creates an array with 7 empty slots. This is why Array.of exists.
