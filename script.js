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


//constants
let characters = "abcdefghijklmnopqrstuvwxyz"
let special = "!@#$%^&*.,"


//helper function
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


function getPasswordLength(text) {
    let response = prompt(text)
    if (isNaN(response)) {
        alert("Enter a number between 8-128")
        response = 0
    }
    return response
}

function generatePassword() {
    let password = "";
    //Make it so prompts dont show til button is clicked
    //Prompt for length of password 8-128 user enters number prompt stores in passwordLength variable
    var passwordLength = 0
    while (passwordLength < 8 || passwordLength > 128) {
        passwordLength = getPasswordLength("Choose a password length of 8-128")
    }

    //Prompt for using lowercase letters user chooses ok/cancel boolean stores in confirmLowercase variable
    var confirmLowercase = confirm("Does your password have lowercase letters?")

    //Prompt for using uppercase letters user chooses ok/cancel boolean stores in confirmUppercase variable
    var confirmUppercase = confirm("Does your password have uppercase letters?")

    //Prompt for using numeric characters user chooses ok/cancel boolean stores in confirmNumber variable
    var confirmNumber = confirm("Does your password have numbers?")

    //Prompt for using special characters user chooses ok/cancel boolean stores in confirmSpecial variable
    var confirmSpecial = confirm("Does your password have special characters?")

    //Make sure at least one type is chosen ok
    //If not alert and go back

    //Create constants from user input
    let needsNumber = confirmNumber
    let needsLowercase = confirmLowercase
    let needsUppercase = confirmUppercase
    let needsSpecial = confirmSpecial

    //Generate random password character by character (i++)
    for (var i = 0; password.length < passwordLength; i++) {
        let randomChoice = randomNumber(0, 4)
        console.log("creating character " + randomChoice)
        if (needsNumber && randomChoice === 0) {
            let c = randomNumber(0, 10)
            password = password + c
            console.log("i'm adding " + c);
            needsNumber = false
            continue
        }
        if (needsLowercase && randomChoice === 1) {
            let c = characters[randomNumber(0, characters.length)]
            password = password + c
            console.log("i'm adding " + c);
            needsLowercase = false
            continue
        }
        if (needsUppercase && randomChoice === 2) {
            let c = characters[randomNumber(0, characters.length)]
            password = password + c.toUpperCase()
            console.log("i'm adding " + c);
            needsUppercase = false
            continue
        }
        if (needsSpecial && randomChoice === 3) {
            let c = special[randomNumber(0, special.length)]
            password = password + c
            console.log("i'm adding " + c);
            needsSpecial = false
            continue
        }
        //second run
        if (randomChoice === 0 && confirmNumber) {
            let c = randomNumber(0, 10)
            password = password + c
            console.log("i'm adding " + c);
            continue
        }
        if (randomChoice === 1 && confirmLowercase) {
            let c = characters[randomNumber(0, characters.length)]
            password = password + c
            console.log("i'm adding " + c);
            continue
        }
        if (randomChoice === 2 && confirmUppercase) {
            let c = characters[randomNumber(0, characters.length)]
            password = password + c.toUpperCase()
            console.log("i'm adding " + c);
            continue
        }
        if (randomChoice === 3 && confirmSpecial) {
            let c = special[randomNumber(0, special.length)]
            password = password + c
            console.log("i'm adding " + c);
            continue
        }
    }
    //Display on page
    return password;
}



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


/////////////////////////////////////////////////////////////////////