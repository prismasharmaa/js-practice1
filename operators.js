

let a = 20;
let b = 6;


console.log("Addition:", a + b);   
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Exponentiation:", a ** b);

//unary operators
console.log("Increment a:", ++a); //pre-increment
console.log("Decrement b:", --b); //pre-decrement

console.log("Increment a:", a++); //post-increment
console.log("Decrement b:", b--); //post-decrement 


//assignment operators
let c = 10;
c += 5; // c = c + 5
console.log("c after += 5:", c);

c -= 3; // c = c - 3
console.log("c after -= 3:", c);

c *= 2; // c = c * 2
console.log("c after *= 2:", c);

c /= 4; // c = c / 4
console.log("c after /= 4:", c);

c %= 3; // c = c % 3
console.log("c after %= 3:", c);

//comparison operators
let d=5;
let e="5";
console.log("Is d equal to e?", d == e); // true, because values are equal
console.log("Is d strictly equal to e?", d === e); // false, because types are different
console.log("Is d not equal to e?", d != e); // false, because values are equal
console.log("Is d strictly not equal to e?", d !== e); // true, because types are different
console.log("Is d greater than e?", d > e); // false
console.log("Is d less than e?", d < e); // false
console.log("Is d greater than or equal to e?", d >= e); // true
console.log("Is d less than or equal to e?", d <= e); // true   


//logical operators

let isRaining = true;
let hasUmbrella = false;

//logical AND GIVES TRUE IF BOTH OPERANDS ARE TRUE
console.log("Raining AND has umbrella:", isRaining && hasUmbrella); //false as both operators are not true

//logical OR GIVES TRUE IF ANY ONE OF THE OPERANDS IS TRUE
console.log("Raining OR has umbrella:", isRaining || hasUmbrella); //true as one of the operators is true

//logical NOT GIVES OPPOSITE OF THE OPERAND
console.log("NOT raining:", !isRaining);    // true as the operator is false

let temp = 15;
let isWindy = true;

console.log(temp > 20 || isWindy);
console.log(temp > 20 && isWindy);
console.log(!isWindy);