const button = document.getElementById("toggleDarkMode");
const body = document.getElementById("body");
const darkModetext = document.getElementById("mode");

function addButtonClick() {
  const buttonText = button.textContent;
  console.log("event", event);
  body.classList.toggle("dark");

  if (buttonText === "ON") {
    button.textContent = "DIM";
    darkModetext.textContent = "Light mode";
  } else {
    button.textContent = "ON";
    darkModetext.textContent = "Dark mode";
  }
}
// function addButtonClick(event)
// button.addEventListener("click", addButtonClick);

// button1.addEventListener("click", addButtonClick);

function calc(operation) {
  let a = 10;
  let b = 12;

  if(operation === '+') {
    return a + b;
  }
  if(operation === '-') {
    return a - b;
  }
  if(operation === '*') {
    return a * b;
  }

  if(operation === '/') {
    return a / b;
  }

  if(operation === '%') {
    return a % b;
  }


  return "Specified operator is not valid"
}


const sum = calc('#');
console.log("sum", sum);