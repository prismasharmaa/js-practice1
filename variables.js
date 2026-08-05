
// let can be updated but not re-declared.
// const cannot be updated or re-declared.
// there are 2 types of datatyepes:primitives and objects.
// primitives are immutable and include: string, number, boolean, null, undefined, symbol, bigint.
// nonprimitive datatypes are mutable and include: object, array, function, date, regex, map, set, weakmap, weakset.


let name = "YourNameHere"; 
const age = 22;
let isEmployed = false;
let salary = null;
let address;
let x=BigInt(123456789);
let y=Symbol("hello");

console.log("BigInt value:", x);
console.log("Type of BigInt:", typeof x);
console.log("Symbol value:", y);
console.log("Type of Symbol:", typeof y);

console.log("Salary:", salary);
console.log("Type of salary:", typeof salary);
console.log("Address:", address);
console.log("Type of address:", typeof address);

console.log("Name:", name);
console.log("Age:", age);
console.log("Employed:", isEmployed);

console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of isEmployed:", typeof isEmployed);
