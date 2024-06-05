const arr = [1, 2, 23, 4, 5, 6];
let number = 23;
let x = arr.indexOf(number);

if (x !== -1) {
    console.log(x)
  
} else {
    console.log("invalid");
}

// remove duplicate element
const Arr = [1, 2, 23, 4, 23, 6, 1]; // Added an additional 1" for demonstration
const uniqueArr = [...new Set(Arr)];
console.log(uniqueArr)

