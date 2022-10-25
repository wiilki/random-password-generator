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
}

var isUpper = window.confirm("Include uppercase?");
var isLower; window.confirm("Include uppercase?");
var isSpecial; window.confirm("Include special characters?");

document.getElementById(isUpper);
document.getElementById(isLower);
document.getElementById(isSpecial);
 
passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
