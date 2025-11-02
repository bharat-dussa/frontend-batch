// Input: Hello
// output: olleH

let ip = "Hello";
let reverse = "";
console.log("ip", ip);
console.log("ip", ip.split("").join(""));
for (let i = 0; i < ip.length; i = i + 1) {
  reverse = reverse + ip[i];
}

const name = "Hello";

const fnReverse = (name) => {
  let reverse = "";
  for (let i = name.length - 1; i >= 0; i--) {
    reverse = reverse + name[i];
  }

  return reverse;
};


const isPalindrome = (name) => {
    const reversed = fnReverse(name);

    if(reversed === undefined) {
        return "Undefind"
    }
    if(name === reversed) {
        return "Palindrome"
    }else{
        return "Not a palindrome";
    }
}
console.log("original", isPalindrome("mom"));
