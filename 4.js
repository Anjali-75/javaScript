// 4. WAP to sort a string, considering the uppercase letters greater than the
// lowercase. Also remove all the spaces from the output.
// Danny is dancing → aacdDgiinnnnsy

var str = str.split("").sort((a,b) => a.localeCompare(b)).join("").trim();