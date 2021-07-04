# Password Generator

## Description
My goal with this project was to use only JavaScript functions & methods to generate a secure password given a series of inputs from the user. Specifically my application will take in five inputs from the user-- password length & four acceptable character types-- and it will *randomly* create a password that can be copied from the browser window!

I was able to accomplish this objective with the following steps: 
1. Use an **event listener** to activate the user prompts
1. Have a single function-- called by the event listener-- trigger all other functions
1. Collect user inputs through `prompt()` & `confirm()` **methods**
    1. Assign the desired length to a variable
    1. Append the inclusion or omission of 4 unique character types in a list with boolean value representation
1. Assign each character type an "ID" of 1-4
    1. lowerCase = 1, upperCase = 2, number = 3, specialCharacter = 4
1. Use my true/false list to root out any character type ID's (1-4) not desired by the user 
1. Loop over the desired password length 
    1. Use `Math.random()` to randomly select an approved character type (1-4)
    1. Use a conditional **if/else** to call a function linked to 1-4
    1. Functions linked to "1-4" use `Math.random()` to select a character within that type
1. Using a `querySelector()` & `.value` property reassign the text within a targeted `<div>` to equal our randomly generated password!
