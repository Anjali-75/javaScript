// 18.What will be the output for the following:
var a = () => {
console.log("a called");
};
a();
//-> a called
var a = 34;
a();
// -> error a is not a function .. in memory block a changed to 34 which was before a 
//function ... hence on calling it showed error. 
 
