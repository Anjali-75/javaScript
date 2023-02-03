// 9. What is the output of the following code?
(function(){
setTimeout(()=> console.log(1),2000);
console.log(2);
setTimeout(()=> console.log(3),0);
console.log(4);
})();

//-> 2 4 3 1 
// IIFE - self invoking functions
// since it is a setTimeout function until the time gets up it will stay in the execution phase and the next line will print. for setTimeout with delay 
// of 0 sec the function will go to the execution phase and the next line will work and then the function will escape the execution phase and went to callback queue before 
//the one with delay time of 2000 and exeutes earlier. 