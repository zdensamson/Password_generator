// Assignment code here
function generatePassword() {
  passLength = lengthCheck();

};

// check for length of password
function lengthCheck() {
  var passLength = window.prompt("Please select the length of your password: 8-128 characters accepted.");
  passLength = parseInt(passLength);
  
  if (passLength < 8 || passLength > 128) {
    window.alert("Please choose a number GREATER than 8 or LESS than 128.");
    lengthCheck();
  }
  return passLength;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
