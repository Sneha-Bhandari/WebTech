// variables: const, let and var


var sum1=0;

add(2,4);

function add(a, b){
    var sum1= a+b;
    console.log(sum1);
}

console.log(sum1);

//conditional statement 
// if, else, if else
// switch case





// If Statement Example
//if (condition) {
  //  block of code to be executed if the condition is true
//}

// if condition
if (10 > 5) {
     outcome = "if block";
}
console.log(outcome);


// if else condition
let hour= 17;
if (hour < 18) {
    console.log( "Good day");
  } else {
       console.log( "Good evening");

  }




// if else if consition
let age= 81;
if(age>=18){
  console.log("you are old enough to drive");
}
else if(age<0){
  console.log("your age cannot be below zero");
  
}
else{
  console.log("you must be 18+ to enter in this site");

}

//switch conditional statement
let dayname="apple";

switch(dayname){
  case 1: 
  dayname="Sunday";
  break;

  case 2: 
  dayname="Monday";
  break;

  case 3: 
  dayname="Tuesday";
  break;
  
  case 4: 
  dayname="Wednesday";
  break;

  case 5: 
  dayname="Thursday";
  break;

  case 6: 
  dayname="Friday";
  break;

  case 7: 
  dayname="Ssturday";
  break;

  default:
    dayname="invalid";
}
console.log("Today is " + dayname);


//looping statement 
//for loop
// while
// while: condition check suru garxa (entry control)
//  do while: statement execute then only the condition is checked (exit control)

// Array:
// array function
const array= [1,2,3,4,5,6,7]
array.forEach((array) => {
  
  console.log(array)
});

for(const sneha of array){
  console.log(sneha)
}

//js object
// date, foreach, 
// throw
// implementing conditional statement: if, if else, if else if, switch
// looping statement : for, while, do while

//Booleans can be objects (if defined with the new keyword)
//Numbers can be objects (if defined with the new keyword)
//Strings can be objects (if defined with the new keyword)
//Dates are always objects
//Maths are always objects
//Regular expressions are always objects
//Arrays are always objects
//Functions are always objects
//Objects are always objects

const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

const x = person;
x.age = 10;      // Will change both x.age and person.age


const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person2["age"];

const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Array object: constructor 
const fruit = ["Banana", "Orange", "Apple", "Mango"];
let text = fruit.constructor;
console.log(text);

// literals:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

const car = [
  "Saab",
  "Volvo",
  "BMW"
];
console.log(car);

// constructor
const mixedArray = new Array("apple", 42, true);
console.log(mixedArray);

// JavaScript Array Object Methods:
const arr= new Array(1,2,3,4,5);
arr.splice(1,2,7,8,9 );
console.log(arr);

const arr1=[1,2,3];
const arr2=[4,5,6];
const ARR= arr1.concat(arr2);
console.log(ARR);

//indexof
const A= [1,2,3,4,5];
B =A.indexOf(3);
console.log(B);

//lastindexof
const arrr= [1,2,3,4,3];
const Bb=arrr.lastIndexOf(3);
console.log(Bb);

const arr3=[2,6,4,9,2]
 arr4=arr3.sort();
console.log(arr4)

//slice: xuttaune array lai
const arr5=[2,6,4,9,2]
 arr6=arr5.slice(0,2);
console.log(arr6)

const fruits=["apple", "banana", "mango","papaya" ];
fruit.push("kiwi");
//fruit.pop("apple");

console.log(fruit)

//length(), reverse(), pop(), push(), 
// shift(), unshift(),sort(), find(), some(), map(), foreach()
//join(), filter(), CopyWithIn(), reduce(), toString(), value Of(), isArray()
// string objects

const number=[2,4,3,2,4];
console.log(number.length);

const fru = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fru.reverse());
//console.log(fru.shift());
console.log(fru.sort());


const s = ["Banana", "Orange", "Apple", "Mango"];
s.unshift("Lemon","Pineapple");
console.log(s);

//filter: 
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result)

// copyWithIn:
const obj = ["Banana", "Orange", "Apple", "Mango"];
console.log(obj.copyWithin(2, 0));

//find
const agess = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

function myFunction() {
  console.log(agess.find(checkAge));

}

//some
//const ag = [3, 10, 18, 20];

//age.some(checkAdult);
//function checkAdult(ag) {
// return ag > 18;
//}
//console.log(age);

//map
const digit = [4, 9, 16, 25];
const newArr = digit.map(Math.sqrt)
console.log(newArr);

//isArray
//const frui = ["Banana", "Orange", "Apple", "Mango"];
//let results = Array.isArray(frui);
// console.log(results)

const fr = ["apple", "orange", "cherry"];
array.forEach((fr)=>{

  console.log(fr);
})