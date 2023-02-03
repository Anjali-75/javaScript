// 15. Write a function that takes in an array of objects ({ name: “”, age: 2}) and returns the names of all the persons whose age is even.

// hof functions -> filter


const obj1 = [{age: 20}, {age: 31},{age: 50}];
console.log(obj1.filter((obj1) => obj1.age%2 == 0));
