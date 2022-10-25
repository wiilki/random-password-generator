// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Variables
  var wrongNumMsg = "Invalid choice. Choose a number between 8-128";
  var noCharMsg = "You must choose at least 1 character type. Try again!";

  // Prompts for password length
  var passLength = +window.prompt("Enter length of password between 8 and 128");

  // While userinput is invalid, user will get following prompt
    while (isNaN(passLength) || passLength < 8 || passLength > 128) {
      passLength = +window.prompt(wrongNumMsg);
    }

  // Asks for character type choices
  var isUpper = window.confirm("Include uppercase?");
  var isLower = window.confirm("Include lowercase?");
  var isSpecial = window.confirm("Include special characters?");

  // Confirmation of users choices
  var isConfirmed = window.confirm("Confirm your choices \nLength: " + passLength + " \nUppercase: " + isUpper + "\nLowercase:  " + isLower + "\nSpecial characters: " + isSpecial)

  // Message if character type is not chosen
  if (isConfirmed) {
    if ((isUpper && isLower && isSpecial) == false) {
      window.alert(noCharMsg);
    }
  }

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
