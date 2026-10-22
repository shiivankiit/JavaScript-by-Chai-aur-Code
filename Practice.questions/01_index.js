// Predict the output.

const a = [10, 20, 30];
a.push(40);//adds an element in the last.
a.unshift(5);//adds an elemnet in the starting.
console.log(a); //output:-[5,10,20,30,40].

const b = [1, 2, 3, 4, 5];
console.log(b.pop(), b.shift());//pop removes elem from the last...
//while shift removes an elem from starting
console.log(b);//output:-[2,3,4]

const c = ["x", "y", "z"];
console.log(c.indexOf("z"), c.indexOf("q"), c.includes("y"));
// index of geaves you the index of elem and includes check elem exist in array or not.
const d = [1, 2, 3, 4, 5, 6];
const e = d.slice(2, 5);//geaves you a part of an array and there is no change in original array.
console.log(d, e);

const f = [1, 2, 3, 4, 5, 6];
const g = f.splice(2, 3);//geaves you a part of an array and make changes in original array.
console.log(g, f);

const h = [1, 2, 3];
console.log(h.join("-"), typeof h.join("-"));

const i = [1, 2, 3];
const j = i;
j.push(4);//put an elem in the last array.
console.log(i);
console.log(i === j);//point:-non-primitive data-type always compared by refrences not by value.
//console.log([1, 2, 3] === [1, 2, 3]);


