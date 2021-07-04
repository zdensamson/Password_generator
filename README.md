# Password Generator

## Description
My goal with this project was to use only JavaScript functions & methods to generate a secure password given a series of inputs from the user. Specifically my application will take in five inputs from the user-- password length & four acceptable character types-- and it will *randomly* create a password that can be copied from the browser window!

I was able to accomplish this objective with the following steps: 
1. Use an **event listener** to activate the user prompts
1. Have a single function-- called by the event listener-- trigger all other functions
1. Collect user inputs through `prompt()` & `confirm()` **methods**
    1. Assign the desired length to a variable
    1. Append the inclusion or omission of 4 unique character types in a list with boolean value representation
1. Assign each character type an "ID" of **1-4**
    1. lowerCase = 1, upperCase = 2, number = 3, specialCharacter = 4
1. Use my true/false list to root out any character type ID's (1-4) not desired by the user 
1. **Loop** over the desired password length 
    1. Use `Math.random()` to randomly select an approved character type (1-4)
    1. Use a conditional **if/else** to call a function linked to 1-4
    1. Functions linked to "1-4" use `Math.random()` to select a character within that type
1. Using a `querySelector()` & `.value` property reassign the text within a targeted `<div>` to equal our randomly generated password!

The "meat & potatoes" of this project exists in the `for` loop which is held in the first function triggered by my event listener. I found development of this code to be the most conceptually challenging, but it was also a wonderful teaching moment. I learned the value of _"coding in chunks"_-- creating multiple functions to handle specific tasks that could easily be observed and _debugged_. Once I had the pieces of information (_chunks_) available to be easily called upon-- the for loop was actually the easiest piece of code to write, and no bugs were observed!

In a future refactor (or application of similar logic above) I hope to utilize the concept of **dynamically generated** variables in a more efficient way. My current code is subject to a lot of refactoring if we want to add any additional character types. This is because I _manually_ assigned an "ID" to each character type (1-4). I believe in a future iteration I can take advantage of the **object** data type, and dynamically generate an ID as a value to every character type function (key). Using this type of structure I can avoid creating multiple lists housing essentially the same "references". 
 

## License 

Copyright (c) 2021 Zachary Dennis Samson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
