function add(a,b){
    return a+b;
}

console.log(add(5, 3)); 
console.log(add(10, 20)); 


function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4));
console.log(isEven(7));

function grade(marks){


    if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}
}
console.log(grade(90));