let str = '10';
let n = 5;

console.log(Number.parseInt(str) + n);
console.log(str + String(n));

let str2 = '32';
let x = Number.parseInt(str2);
n += x;
console.log(n);

// precision
// eta string hoye jay
let a = 12.321;
let b = a.toPrecision();
let b = a.toPrecision(3);
console.log(b);
