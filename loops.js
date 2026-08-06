for (i=1; i<=10; i++) { //for loop intialization, condition, increment/decrement
    console.log(i);
}

let sum=0;
for (let i=1; i<=10; i++) { //i is the loop variable, it can be used inside the loop
    sum=sum+i;
}
console.log("sum=", sum);

for (let i=1; i<=20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let count=10;
while(count>=1){
    console.log(count);
    count--;
}

for (let i=1; i<=100; i++) {
    if (i % 2===0){
        console.log(i);
    }
}

//while loop

let i=1; //initialization
while(i<=10){ //condition
    console.log(i);
    i++; //increment/decrement
}


//do-while loop 
//thisloop will execute the code block at least once even if the condition is false

let j=1; //initialization
do{
    console.log(j);
    j++; //increment/decrement
}while(j<=10); //condition 


//for of loop
//helps to iterate over iterable objects like arrays, strings, maps, sets, etc.
 let str="prisma";
 for(let i of str){ //no need to initialize,update or check the condition, it automatically iterates over the iterable object
    console.log(i);

 }

 //for in loop
//helps to iterate over the properties of an object
let student ={
    name:"prisma",
    age:22,
    isEmployed:true
}
for(let key in student){
    console.log(key, student[key]);
}