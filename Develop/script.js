// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Variables
  var possibleChar = [];
  var wrongNumMsg = "Invalid choice. Choose a number between 8-128";
  var noCharMsg = "You must choose at least 1 character type. Try again!";
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperLetters = lowerLetters.map(element => {
    return element.toUpperCase();
  });

  // var password = generatePassword(); --Commented out because unsure of use
  var passwordText = document.querySelector("#password");

  // Prompts for password length
  var passLength = +window.prompt("Enter length of password between 8 and 128");

  // While userinput is invalid, user will get following prompt
  while (isNaN(passLength) || passLength < 8 || passLength > 128) {
    passLength = +window.prompt(wrongNumMsg);
  }

  // Asks for character type choices
  var isUpper = window.confirm("Include uppercase?");
  var isLower = window.confirm("Include lowercase?");
  var isNumber = window.confirm("Include numbers?");
  var isSpecial = window.confirm("Include special characters?");

  // Confirmation of users choices
  var isConfirmed = window.confirm("Confirm your choices \nLength: " + passLength + " \nUppercase: " + isUpper + "\nLowercase:  " + isLower + "\nNumbers: " + isNumber + "\nSpecial characters: " + isSpecial)

  // Message if character type is not chosen or user cancels
  if (!isConfirmed) {
    window.alert("Try again!");
  } else if (!isUpper && !isLower && !isSpecial && !isNumber) {
    window.alert(noCharMsg);
  }
  // Pushes selected character types into one single array
  if (isUpper) {
    for (var i = 0; i < upperLetters.length; i++) {
      possibleChar.push(upperLetters[i]);
    }
  } else if (isLower) {
    for (var j = 0; j < lowerLetters.length; j++) {
      possibleChar.push(lowerLetters[j]);
    }
  } else if (isNumber) {
    for (var k = 0; k < numbers.length; k++) {
      possibleChar.push(numbers[k]);
    }
  } else if (isSpecial) {
    for (var x = 0; x < specialChar.length; x++) {
      possibleChar.push(specialChar[x]);
    }
  }
  
  var randomChar = possibleChar[Math.floor(Math.random()*possibleChar.length)];

  
  window.alert(possibleChar);


  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);