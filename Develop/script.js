// Assignment code here
function generatePassword() {
  // stores the desired length of password
  passLen = lengthCheck();
  // stores which characters to use (true/false)
  charList = charType();
  // x-ref for what random char functions to call
  functionReference = functionSelector(charList);

  // generate empty string to append randomly generated password
  passwordHolder = "";
  for (i = 0 ; i < passLen ; i++) {
    charSelector = functionReference[Math.floor(Math.random()*functionReference.length)];
    if (charSelector == 1) {
      charSelector = randomLower();
    }
    else if (charSelector == 2) {
      charSelector = randomUpper();
    }
    else if (charSelector == 3) {
      charSelector = randomNum();
    }
    else {
      charSelector = randomSpecial();
    }
    passwordHolder = passwordHolder.concat(charSelector);
  };
  
  return passwordHolder;
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
};

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
};

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
};
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
};
function randomNum() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
};
function randomSpecial () {
  specialList = ["!", "@", "#", "$", "%", "&", "*"];
  return specialList[Math.floor(Math.random()*7)];
};

// creates a unique reference list to choose char types selected by user
function functionSelector (list) {
  charList = list;
  newFuncList = [];
  functionRef = [1,2,3,4];

  for (i = 0 ; i < charList.length ; i++ ) {
    if (charList[i]) {
      newFuncList.push(functionRef[i]);
    }
  }
  return newFuncList;
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
