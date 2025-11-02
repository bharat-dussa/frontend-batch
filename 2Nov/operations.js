let a = 40;
let b = 20;

b = 0;

let c = a + b;
let mins = a - b;

if (a > b) {
  mins = a - b;
} else {
  mins = b - a;
}

let div = a / b;

if(b === 0) {
    console.log("number can't be divied by zero");
    div = "number can't be divied by zero";
}


let mul = a * b;

console.log("c", c);
console.log("mins", mins);
console.log("div", div, typeof div);
console.log("mul", mul);
