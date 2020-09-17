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
//MYCODE

//make it so prompts dont show til button is clicked

//Prompt for length of password 8-128 x
// var passwordLength = prompt("Choose a password length of 8-128 characters")
var passwordLength = 10
//user to enter number
//store response in a variable x

//recognize it as a number
// if (isNAN(passwordLength)) {
//     alert(passwordLength + " is not a number");
// } else(passwordLength >= 129 | passwordLength <= 7) {
//     alert("Please enter a number between 8 and 128")}


//Prompt for using lowercase letters x
// var confirmLowercase = confirm("Does your password have lowercase letters?")
var confirmLowercase = true
//user to enter ok or cancel (boolean) x
//store response in a variable x


//Prompt for using uppercase letters x
// var confirmUppercase = confirm("Does your password have uppercase letters?")
var confirmUppercase = true
//user to enter ok or cancel (boolean) x
//store response in a variable x


//Prompt for using numeric characters x
// var confirmNumber = confirm("Does your password have numbers?")
var confirmNumber = true
//store response in a variable x


//Prompt for using special characters x
// var confirmSpecial = confirm("Does your password have special characters?")
var confirmSpecial = true
//user to enter ok or cancel (boolean) x
//store response in a variable x


//Validate all responses 
//make sure at least one is clicked as ok


let characters = "abcdefghijklmnopqrstuvwxyz"
let special = "!@#$%^&*.,"

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


function generatePassword() {
    let password = "";
    let needsNumber = confirmNumber
    let needsLowercase = confirmLowercase
    let needsUppercase = confirmUppercase
    let needsSpecial = confirmSpecial
    //generate random password character by character (i++)
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
        //actually add the character, not just console.log
        //choose random character type, not the same one each time
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
        if (randomChoice === 3 && confirmNumber) {
            let c = special[randomNumber(0, special.length)]
            password = password + c
            console.log("i'm adding " + c);
            continue
        }
    }
    return password;
}

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


/////////////////////////////////////////////////////////////////////