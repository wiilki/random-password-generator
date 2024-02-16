// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword() {
  // Password criteria prompts
  var length = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128."));
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return "";
  }

  var hasLowercase = confirm("Click OK to include lowercase characters.");
  var hasUppercase = confirm("Click OK to include uppercase characters.");
  var hasNumeric = confirm("Click OK to include numeric characters.");
  var hasSpecial = confirm("Click OK to include special characters.");
  
  // Validate character type selection
  if (!hasLowercase && !hasUppercase && !hasNumeric && !hasSpecial) {
    alert("At least one character type must be selected.");
    return "";
  }

  // Character sets
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numericChars = '0123456789';
  var specialChars = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  
  // Combine selected character sets
  var allChars = "";
  if (hasLowercase) allChars += lowercaseChars;
  if (hasUppercase) allChars += uppercaseChars;
  if (hasNumeric) allChars += numericChars;
  if (hasSpecial) allChars += specialChars;

  // Generate password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
