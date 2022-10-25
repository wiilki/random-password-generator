// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 // var password = generatePassword();
  var passwordText = document.querySelector("#password");

// Created variables for each user choice

var passLength = window.prompt("Enter length of password between 8 and 128");

if (passLength < 8 || passLength > 128){
  window.prompt("Enter a number between 8 and 128")
} else {
  document.getElementById(passLength);
  alert(input);
}

var isUpper = window.prompt("Include uppercase?");
var isLower; window.prompt("Include uppercase?");
var isSpecial; window.prompt("Include special characters?");

 
passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
