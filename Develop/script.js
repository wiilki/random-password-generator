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
  window.prompt("Input a number between 8 and 128");
  
} 


// Asks for character type choices
var isUpper = window.confirm("Include uppercase?");
var isLower = window.confirm("Include lowercase?");
var isSpecial = window.confirm("Include special characters?");

if (isUpper){
  isUpper = "Yes"
} else {
  isUpper = "No"
}

if (isLower){
  isLower = "Yes"
} else {
  isLower = "No"
}

if (isSpecial){
  isSpecial = "Yes"
} else {
  isSpecial = "No"
}

// Confirmation of users choices
var isConfirmed = window.confirm("Confirm your choices \nLength: " + passLength + " \nUppercase: " + isUpper + "\nLowercase:  " + isLower + "\nSpecial characters: " + isSpecial)




passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
