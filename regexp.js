// regular expression
//let text = "The best things in life are free"; let pattern = /e/;
//let result = pattern.test(text);
//console.log(result)

// starting : ^  ending: +$ and use of test
let pattern1 = /^[a-z. A-Z !"#€%&/()=? 0-9]+$/
console.log(pattern1.test("Hello. 6"));

let pattern = /^[A-Z][a-z]+@[0-9]+$/
console.log(pattern.test("Sneha@123")); // true
console.log(pattern.test("Sneha@")); // false

