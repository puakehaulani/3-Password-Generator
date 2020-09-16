///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

//////////////////////////////////////
//PSUEDOCODE

//Prompt for length of password 8-128, user to enter number. store response in a variable. recognize it as a number.

//Prompt for using lowercase letters, user to enter ok or cancel (boolean). store response in a variable.

//Prompt for using uppercase letters, user to enter ok or cancel (boolean). store response in a variable.

//Prompt for using numeric characters, user to enter ok or cancel (boolean). store response in a variable.

//Prompt for using special characters, user to enter ok or cancel (boolean). store response in a variable.

//Validate all responses and make sure at least one is clicked as ok

//generate random password character by character (i + 1)

//return final password 

//display on page

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////