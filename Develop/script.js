// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 // var password = generatePassword();
  var passwordText = document.querySelector("#password");

// Prompts for password length
var passLength = +window.prompt("Enter length of password between 8 and 128");

// While userinput is invalid, user will get following prompt
while (passLength !== Number || passLength < 8 || passLength > 128){
  var passLength = +window.prompt("Invalid. Enter number between 8 and 128");
  if (passLength >= 8 && passLength <= 128) break;
}

// Asks for character type choices
var isUpper = window.confirm("Include uppercase?");
var isLower = window.confirm("Include lowercase?");
var isSpecial = window.confirm("Include special characters?");

// Assigns values to "Yes" or "No" for confirmation screen

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
