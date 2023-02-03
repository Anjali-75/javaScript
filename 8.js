// 8. What will be the output of the following code?
let a;
console.log(a === undefined);
//-> true
// in memory block a is present but no value is assigned to it 

console.log(a === null);
//-> false
// null is the intentional value which is not provided whereas undefined dont exist at all in the memory. Null is a premitive data type

console.log(a*2);
//->NaN
// when we try to apply any operation on an undefined value it showes nt a number.

console.log(`${a} is the value of a`);
// -> undefined is a value of a 
//value of a in memory is undefined 
