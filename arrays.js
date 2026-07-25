let numbers=[1,2,3,4,5];
console.log(numbers.length);

for (i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

console.log("Even numbers only:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}


console.log(numbers.push(6));
for (i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}


