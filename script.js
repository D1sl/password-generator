// Assignment code here

// Available characters (ADD REST ONCE CODE WORKS)
upperCaseCharacter = ["A", "B", "C", "D", "E", "F"];
lowerCaseCharacter = ["a", "b", "c", "d", "e", "f"];
numberCharacter = ["1", "2", "3", "4", "5", "6"];
specialCharacter = ["!", "@", "#", "€", "%", "&", "/", "(", ")", "=", "?"];

// Store users answers in variables
var askPasswordLength = "";
var askUpperCaseCharacters = false;
var askLowerCaseCharacters = false;
var askNumberCharacters = false;
var askSpecialCharacters = false;


// 1. App goes through a series of questions to determine what kind of a password the user wants

function generatePassword() {
  var askPasswordLength = window.prompt("How long would you like your password to be? Answer with a number between 8-128.");
  var askUpperCaseCharacters = window.confirm("Would you like your password to include uppercase characters?")
  var askLowerCaseCharacters = window.confirm("Would you like your password to include uppercase characters?")
  var askNumberCharacters = window.confirm("Would you like your password to include lowercase characters?")
  var askSpecialCharacters = window.confirm("Would you like your password to include special characters?")

  console.log("Password length: " + askPasswordLength);
  console.log("Uppercase characters: " + askUpperCaseCharacters);
  console.log("Lowercase characters: " + askLowerCaseCharacters);
  console.log("Number characters: " + askNumberCharacters);
  console.log("Special characters: " + askSpecialCharacters);

}



// 1.1. Password length
// 1.2. Ask if user wants uppercase letters
// 1.3. Ask if user wants lowercase letters
// 1.4. Ask if user wants special characters

// 2. App goes through some kind of loop that concatenates a random letter from each array into a draft string and repeats it as long as the amount of requested characters are met 

// 3. App reorganizes the draft string into the final password












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
