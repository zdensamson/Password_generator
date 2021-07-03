// Assignment code here
function generatePassword() {
  // stores the desired length of password
  passLen = lengthCheck();
  charList = charType();
  
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

// ask yes/no for each possible character type 
function charType() {
  lowerCaseCheck = window.confirm("Would you like LOWER CASE letters in your password?");
  upperCaseCheck = window.confirm("Would you like UPPER CASE letters in your password?");
  numberCheck = window.confirm("Would you like NUMBERS in your password?");
  specialCheck = window.confirm("Would you like SPECIAL CHARACTERS in your password? (i.e. !, $, etc.)")
  // store the 4 seperate answers in an array 
  charList = [lowerCaseCheck, upperCaseCheck, numberCheck, specialCheck];
  // if user says "NO" to all char types -- re-run the function 
  if (!lowerCaseCheck && !upperCaseCheck && !numberCheck && !specialCheck) {
    window.alert("Please choose at least ONE character type for your password.")
    charType();
  }
  return charList;
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
