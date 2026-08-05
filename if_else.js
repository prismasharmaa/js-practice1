let marks = 75;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Fail");
}

//ternary operator
let result = (marks >= 50) ? "Pass" : "Fail"; // assigns "Pass" if marks is greater than or equal to 50, otherwise assigns "Fail"
console.log("Result:", result);



let number = prompt("Enter a number=");


if(number % 5 === 0){
  console.log(number , " is divisible by 5");
} else {
  console.log(number , " is not divisible by 5"); 
}