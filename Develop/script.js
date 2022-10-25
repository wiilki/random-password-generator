// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 // var password = generatePassword();
  var passwordText = document.querySelector("#password");

// Created variables for each user choice

// Prompts for password length
var passLength = window.prompt("Enter length of password between 8 and 128");

if (passLength < 8 || passLength > 128){
  window.prompt("Input a number between 8 and 128")
} else {
  document.getElementById(passLength);
}

// Asks if uppercase included
var isUpper = window.confirm("Include uppercase?");
document.getElementById(isUpper);

if (isUpper){
  isUpper = "Yes"
} else {
  isUpper = "No"
}

// Asks if lowercase included
var isLower; window.confirm("Include lowercase?");
document.getElementById(isLower);

if (isLower){
  isLower = "Yes"
} else {
  isLower = "No"
}

// Asks if special characters included
var isSpecial; window.confirm("Include special characters?");
document.getElementById(isSpecial);

if (isSpecial){
  isSpecial = "Yes"
} else {
  isSpecial = "No"
}

// Confirmation of users choices
window.confirm("Confirm your choices " +
  "Length: " + passLength + "  Uppercase: " + isUpper + "  Lowercase:  " + isLower + "  Special characters: " + isSpecial)

passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
