// .Remove all the duplicate names objects from an array of objects. The object can
// contain name and age.
// [ { name: “Karl”, age:20}, { name: “Karl”, age:23}, { name:
// “Marry”, age:20}, { name: “Aston”, age:20} ]
// Output:
// [{ name: “Marry”, age:20}, { name: “Aston”, age:20} ]

const removeDuplicates = (persons) => {
    const count = persons.reduce((total, val) => {
      const name = val.name;
      total[name] = (total[name] ? total[name] : 0) + 1;
      return total;
    }, {});
    return persons.filter((val)=>{
      const name=val.name
      return count[name]===1
    })
  };
  console.log(removeDuplicates(persons))