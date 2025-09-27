const button = document.getElementById("toggleDarkMode");
const body = document.getElementById("body");
const darkModetext = document.getElementById("mode");

function addButtonClick(event) {
  const buttonText = button.textContent;
  console.log("event", event);
  body.classList.toggle('dark');

  if(buttonText === "ON") {
    button.textContent = "OFF";
    darkModetext.textContent = "Light mode";
  }else{
    button.textContent = "ON";
    darkModetext.textContent = "Dark mode";
  }
  
}
button.addEventListener("click", addButtonClick);
