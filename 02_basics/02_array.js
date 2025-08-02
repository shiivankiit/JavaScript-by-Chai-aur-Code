const marvel_heros=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

// marvel_heros.push(dc_heroes);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const new_arr=marvel_heros.concat(dc_heroes);//combines two arr into singel one.
// console.log(new_arr);

//spread operator:using it we can also combine two array.

// const all_new_heros=[...marvel_heros,...dc_heroes];
// console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.from("IronMan"));//cnvrt into array.
console.log(Array.from({name:"Hulk"}));// explore it later

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));






