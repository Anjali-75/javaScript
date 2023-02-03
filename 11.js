// 11. Create a calculator that supports +, -, * and /. The calculator should take a string
// expression as an input. The string can
// Example:
// “2*2” → 4
// “8-8” → 0
// “9+9” → 18
// “a*a” → invalid
// “2” → invalid
// “9/2” → 2.5
// Also, display “invalid” in case the input string is not valid.
// The input string is considered as valid, if it has two numeric characters and an
// operator out of (+, - , /, *)
// Also handle, if there is any extra space.


const obj = {
    '+': function (num1,num2){ return num1+num2 },
    '-': function(num1, num2){ return num1-num2 },
    '*': function(num1, num2){ return num1*num2 },
    '/': function(num1, num2){ return num1/num2 },
}

function calculate(num1, num2, sign){
    console.log(obj[sign](num1,num2));
}

const str = "12- 12"
const arr = str.replaceAll(" ","").split(/([\s- / + * ])/);
      num1= Number(arr[0])
      num2 = Number(arr[2])
      const sign = arr[1];
      if(isNaN(num1) || isNaN(num2) || arr.length <=1)
       console.log("Invalid")
      else calculate(num1, num2, sign)
