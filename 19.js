//string
s1 = " Hello World"
console.log(s1);
console.log(s1.toLowerCase());
console.log(s1.toUpperCase());
console.log(s1.includes("World"));
console.log(s1.concat(" !"));
console.log(s1.indexOf("W"));
console.log(s1.startsWith("Hello"));
console.log(s1.endsWith("d"));
console.log(s1.replace("Hello", "Hi"));
console.log(s1.replaceAll('o', 'e'));
console.log(s1.substring(1,5))
console.log(s1.trim(" "));
console.log(s1.slice(4,7));
console.log(s1.split(" "));
console.log(s1.localeCompare("M"));

// array
a1 = ["abc", 123, true,"nkr"];
console.log(a1);
console.log(a1.push(false));
console.log(a1);
console.log(a1.pop());
console.log(a1);
console.log(a1.shift());
console.log(a1);
console.log(a1.unshift(123, "xyz"))
console.log(a1);
const n = [4, 9, 16, 25];
console.log(n.map(Math.sqrt));
console.log(n.filter((num) =>{
    return num%2 == 0;
}))
console.log(a1.splice(2,1,"Fruit"));
console.log(a1);
console.log(a1.slice(2,4))
console.log(a1.sort());
console.log(a1.join(" "));

//object
var obj ={
    name:"Abc",
    age: 24,
    classroom: 7,
    title: "math"
}
var o = {
    age:15,
    city:"noida"
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.assign(obj,o));
obj.printh = 50;
console.log(obj.hasOwnProperty('printh'));
console.log(obj.hasOwnProperty('toString'));
console.log(obj.hasOwnProperty('printo'));