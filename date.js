// window object, DOM

// date object:
// constructior => new date
//const d = new Date();

//new Date(year,month)
//new Date(year,month,day)
//new Date(year,month,day,hours)
//new Date(year,month,day,hours,minutes)
//new Date(year,month,day,hours,minutes,seconds)
//new Date(year,month,day,hours,minutes,seconds,ms)


const d = new Date("2024-05-22");
console.log(d);

const d1 = new Date("2024, May 22");
console.log(d1);

//miliseconds ma hunxa
console.log(Date.now());
//current date:
console.log(new Date(Date.now()));

const d4 = new Date();
console.log(d4.toString());
//console.log(d4.toDateString());
//console.log(d4.toUTCString());
//console.log(d4.toISOString());

// today's date
const date=new Date();
console.log(date.getDate());

//today's day
console.log(date.getDay());

// year
console.log(date.getFullYear());

// hour
console.log(date.getHours());

console.log(date.getMilliseconds());

console.log(date.getMonth());

console.log(date.getSeconds())

console.log(date.getTime());

//universal time ko lagi
console.log(date.getUTCDate());

console.log(date.getUTCDay());

