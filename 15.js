// 15.What is the output of the following code?

function f1(object) {
const obj = { name: "Daniel", age: 27 };
if (object.age === 20) {
const obj = { name: "Jack" };
object.name = "Sam";
console.log(obj.age);
//-> undefined { const hv a block scope }

} else {
const obj = { name: "Emily" };
object = null;
console.log(obj.name);
//-> Emily {const have block scope}
}
}
const ob1 = { name: "Mark", age: 20 };
const ob2 = { name: "Karl", age: 21 };
f1(ob1);
console.log(ob1);
//-> {name:"Sam", age: 20} {changed the key value pair of ob1 in f1 with argument object}

f1(ob2);
console.log(ob2);
// -> { name: "Karl", age: 21} -> value is not null even if we change in f1() beacuse we are changeing the 
//refrence of the object as whole and so it is not possible so it remained same. 
