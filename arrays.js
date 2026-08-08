let numbers=[1,2,3,4,5]; //arrays are used to store multiple values in a single variable. They are ordered, mutable, and can hold elements of any type.
console.log(numbers.length); //4

//using for loop to iterate over the array
for (i=0; i<numbers.length; i++){ // for array loop in condition = is not equal to length of array, as array index starts from 0 and length starts from 1
    console.log(numbers[i]);
}

//using for of loop to iterate over the array
for(let num of mumbers){ //for of loop is used to iterate over the elements of an array
    console.log(num);
}



console.log("Even numbers only:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}


//array methods

let fruits = ["apple", "banana", "orange"];
//push method adds an element to the end of the array
fruits.push("grape");
console.log(fruits); //["apple", "banana", "orange", "grape"] //changes the original array


//pop method removes the last element from the array
fruits.pop();
console.log(fruits); //["apple", "banana", "orange"] //changes the original array


//shift method removes the first element from the array
fruits.shift();
console.log(fruits); //["banana", "orange"] //changes the original array

//unshift method adds an element to the beginning of the array
fruits.unshift("kiwi");
console.log(fruits); //["kiwi", "banana", "orange"] //changes the original array

//toString method converts an array to a string
let fruitsString = fruits.toString();
console.log(fruitsString); //"kiwi,banana,orange" //does not change the original array

//slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
let citrus = fruits.slice(1, 3);
console.log(citrus); //["banana", "orange"] //does not change the original array

//splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array.
// syntax: array.splice(start, deleteCount, item1, item2, ...)

//add elements to the array
fruits.splice(1, 0, "mango", "papaya"); //remove 0 elements from index 1 and add "mango" and "papaya"
console.log(fruits); //["kiwi", "mango", "papaya", "banana", "orange"] //changes the original array

//remove elements from the array
fruits.splice(2, 1); //remove 1 element from index 2
console.log(fruits); //["kiwi", "mango", "banana", "orange"] //changes the original array

//replace elements in the array
fruits.splice(1, 1, "strawberry"); //remove 1 element from index 1 and add "strawberry"
console.log(fruits); //["kiwi", "strawberry", "banana", "orange"] //changes the original array


//practice problems

let companys=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
  console.log(companys.length); //6

  //remove the last company from the array
  companys.shift();
  console.log(companys); //["Microsoft", "Uber", "Google", "IBM", "Netflix"] //changes the original array

  //remove uber and addd ola in its place
  companys.splice(1,1,"Ola");
  console.log(companys); //["Microsoft", "Ola", "Google", "IBM", "Netflix"] //changes the original array

  //add Amazon at the end
  companys.push("Amazon");
  console.log(companys); //["Microsoft", "Ola", "Google", "IBM", "Netflix", "Amazon"] //changes the original array


  //concat
  //used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
  let fruits1 = ["apple", "banana"];
  let fruits2 = ["orange", "grape"];
  let fruits3 = ["kiwi", "mango"];
  let allFruits = fruits1.concat(fruits2, fruits3);
  console.log(allFruits); //["apple", "banana", "orange", "grape", "kiwi", "mango"] //does not change the original arrays 



