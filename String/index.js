//string object

let str1="Sneha";
console.log(str1);
//charAt
console.log(str1.charAt(3));

//charCodeAt
console.log(str1.charCodeAt(0));

let str2="Bhandari";
console.log(str1.concat(str2));

console.log(str1.endsWith("a"));

console.log(str1.includes("S"));

console.log(str1.indexOf("S"));

console.log(str2.lastIndexOf("a"));

console.log(str1.match("Sneha"));

console.log(str1.replace("Sneha","sneha"));

let str3="this is a string string";
console.log(str3.replaceAll("string","not string"));

console.log(str3.search("i"));

let str4="this is slice object"
console.log(str4.slice(-3));
console.log(str4.slice(5,9));

let str5="this is split object"

console.log(str5.split(" "));
console.log(str5.split(" ", 3));

console.log(str5.startsWith("this"));

console.log(str5.substr(8,5));

//boolean object
var snehaisastudent=true;
console.log(snehaisastudent.valueOf());
console.log(snehaisastudent.toString());

//number object
//math object

//toString()	Returns a number as a string
let num=2.325;
console.log(num.toString());
console.log(num.toExponential());
console.log(num.toFixed());
console.log(num.toPrecision());
console.log(num.valueOf());


console.log(Number.isInteger(num));

console.log(isNaN("3"));
console.log(isFinite("0.000000000001"));


console.log(parseFloat("10.4"));
console.log(parseInt("10.33"));

//toExponential()	Returns a number written in exponential notation
//toFixed()	Returns a number written with a number of decimals
//toPrecision()	Returns a number written with a specified length
//valueOf()	Returns a number as a number



console.log(Math.PI)  ;     // returns PI
console.log(Math.round(2.333));
console.log(Math.ceil(2.44))
console.log(Math.floor(2.44))
console.log(Math.trunc(2.6))  //interger ma dinxa


Math.E        // returns Euler's number

Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

console.log(Math.sign(-33)); // return -1  

console.log(Math.sign(3));   // return 1

console.log(Math.pow(2,4));
console.log(Math.sqrt(16));
console.log(Math.abs(3.265217541));


console.log(Math.min(1, 3, 5 ,6));
console.log(Math.max(1, 3, 5 ,6));

console.log(Math.random());

console.log(Math.log(1));

// dont pass in degree , change in radian by x*PI/180
console.log(Math.sin(0.52));

