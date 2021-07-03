// Assignment code here
function generatePassword() {
  var passLen = lengthCheck();
  
};

// check for length of password
function lengthCheck() {
  passLen = lengthPrompt();
  
   // check if user inputed a FLOAT
   if (parseInt(passLen) !== parseFloat(passLen)) {
    window.alert("Please enter a non-zero INTEGER");
    lengthCheck();
  }
    // check if user inputed a STRING
  if (!parseInt(passLen)) {
    window.alert("Please enter a non-zero INTEGER");
    lengthCheck();
  }
  // check if an INTEGER input is between 8-128
  if (parseInt(passLen) < 8 || parseInt(passLen) > 128) {
    window.alert("Please choose a number GREATER than 8 or LESS than 128.");
    lengthCheck();
  }

  return parseInt(passLen);
};

// lengthCheck calls this function to prompt user input for password length
function lengthPrompt() {
  return window.prompt("Please select the length of your password: 8-128 characters accepted.");
}

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
