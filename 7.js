// 7. What will be the output of the following code?
console.log(0/0 === 0/0);
//-> false
console.log(0/0 == 0/0);
// -> false
console.log(Number.isNaN(0/0) === Number.isNaN(0/0));
//-> true

// 0/0 will give NaN and in case of NaN both strict and loose equality gives false and hence we use isNaN to check if it is NaN.  