function add(a, b) {
  console.log("sum", a + b);
}

function minus(a, b) {
  if (a > b) {
    console.log("minus", a - b);
  } else {
    console.log("minus", b - a);
  }
}

function mult(a, b) {

  console.log("mult", a * b);
}

function div(a = 45, b) {
  if (b === 0) {
    console.log("can;'t be divided by zero");
  } else {
    console.log("div", a / b);
  }
}

add(4, 10);
mult(4, 10);
div(undefined, 2);
minus(4, 10);

// Functions
// Type casting 
