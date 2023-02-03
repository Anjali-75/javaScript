
//6. What will be the output of the following code?
var a = {a: 1};
var b = {a: 1};
console.log(a == b);
//-> false 
console.log(a === b);
//-> false
// no matter if you use loose or strict equity, in both cases the result will be false as object only returns true if both the operands refers to the same object. 

var c = a;
console.log(a == c);
//-> true

console.log(a === c);
// -> true

// this is true because it is dirctly refrencing to the same object
// To check if the objects are equal we can use __proto__ which will return the prototype of both the objects and their constructors can be checked. 
//They only tell about the instance of the of the object and not their properties. 
// value --> Object.prototype
// key = __proto__