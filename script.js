// Psuedocode
  //step1: Gather user input on password requirements
    //Need to have an input for # of characters
    //need input for special characters
    //need an input for lowercase
    //input for uppcase
    //input for numbers

    //validate user input
    //num of characters between 8 and 128 (validation step1)
    //what they answered true to include
    
    //Decide how to choose what character to include
    //randomly grab values from each included category
    //assemble password string to be returned

  // return "Hello";



//MY README BREAKDOWN:
  
//Create prompts for password criteria:
//-Length (at least 8 characters and no more than 128 characters)
//-character types to include or not (lowercase, uppercase, numeric, and/or special characters)
//When all prompts are answered then a password should be validated and at least one character type should be selected
//When all prompts are answered a password is generated that matches the chosen criteria
//Then the password is either displayed in an alert or written on the page.

//array for lowercase
//array for upper
//array for numbers
//array for special characters

let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 's', 'y', 'z']
let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'S', 'Y', 'Z']
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let special = ['~', '`', '!', '@', '#', '$', '%', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|']


//function that holds all the prompts
 function userPrompts(){
  let passwordLength = window.prompt("How many characters would you like your password to be?");
  if(passwordLength < 8 || passwordLength > 128){
    window.alert("Pick between 8 and 128 characters");
    return userPrompts();
  } else if(isNaN(passwordLength)) {
    window.alert("Please pick a number")
      return userPrompts();
  } 

  let passwordLower = window.confirm("Would you like to add lowercase letters?");
  let passwordUpper = window.confirm("Would you like to add uppercase letters?");
  let passwordNumber = window.confirm("Would you like to add numbers?");
  let passwordSpecial = window.confirm("Would you like to add special characters?");

  if(passwordLower === false && passwordUpper === false && passwordNumber === false && passwordSpecial === false){
    window.alert("Please select at least one character type")
    return userPrompts();
  }

  let userAnswer = {
    length: passwordLength, 
    lowerCase: passwordLower,
    upperCase: passwordUpper,
    numberCase: passwordNumber,
    specialCase: passwordSpecial,
  }
  
  return userAnswer;

}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }







//object to store the users answers

//function that gets a random element from an array
function getRandomElement(array) {
    // Math.random to get an index
    // array[i]    
}

//function that generates the password

function generatePassword(){
    let userAnswers = userPrompts();
    var password = ""

    for( i = 0; i < userAnswers.length; i++) {
        password = password + "a"        
    }
    if(userAnswers.lowerCase === true){
//Then offer lowercase characters as part of the generated password.
    }
    if(userAnswers.upperCase === true) {
//Then offer Uppercase characters as part of the generated password.
    }
    if(userAnswers.numberCase === true){
//Then offer number character as part of the generated password.
    }
    if(userAnswers.special === true){
//Then offer special characters as part of the generated password.
    }

  
    return password;

  
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

















// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);