let Up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Low = "abcdefghijklmnopqrstuvwxyz";
let Num = "0123456789";
let Sym = "!@#$%^&*()";

let UpBox = document.getElementById("upper");
let LowBox = document.getElementById("lower");
let NumBox = document.getElementById("number");
let SymBox = document.getElementById("symbol");

let displayPass = document.getElementById("displayPass");

function generate(e) {
  e.preventDefault();
  displayPass.innerHTML = "";

  let length = document.getElementById("length");
  let passwordLength = length.value;
  let password = "";
  let passwordType = "";

  if (UpBox.checked == true) {
    passwordType += Up;
  }
  if (LowBox.checked == true) {
    passwordType += Low;
  }
  if (NumBox.checked == true) {
    passwordType += Num;
  }
  if (SymBox.checked == true) {
    passwordType += Sym;
  }

  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * passwordType.length);
    password += passwordType.substring(randomNumber, randomNumber + 1);
  }

  displayPass.innerHTML += password;
}

function copyText() {
  navigator.clipboard.writeText(displayPass.innerHTML);
  console.log(1);
}
