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
  // 1.1. Password length
  var askPasswordLength = window.prompt("How long would you like your password to be? Answer with a number between 8-128.");

  // 1.2. Ask if user wants uppercase letters
  var askUpperCaseCharacters = window.confirm("Would you like your password to include uppercase characters?")

  // 1.3. Ask if user wants lowercase letters
  var askLowerCaseCharacters = window.confirm("Would you like your password to include lowercase characters?")

  // 1.4. Ask if user wants numbers
  var askNumberCharacters = window.confirm("Would you like your password to include numbers?")

  // 1.4. Ask if user wants special characters
  var askSpecialCharacters = window.confirm("Would you like your password to include special characters?")

  console.log("Users answers so far:");
  console.log("Password length: " + askPasswordLength);
  console.log("Uppercase characters: " + askUpperCaseCharacters);
  console.log("Lowercase characters: " + askLowerCaseCharacters);
  console.log("Number characters: " + askNumberCharacters);
  console.log("Special characters: " + askSpecialCharacters);

  // Store letters from requested arrays in a draft string
  var draftPassword = "";

  // 2. App goes through some kind of loop that concatenates a random letter from each array into a draft string and repeats it as long as the amount of requested characters are met 
  if (askUpperCaseCharacters) {
    draftPassword = draftPassword.concat(upperCaseCharacter);
  }

  if (askLowerCaseCharacters) {
    draftPassword = draftPassword.concat(lowerCaseCharacter);
  }

  if (askNumberCharacters) {
    draftPassword = draftPassword.concat(numberCharacter);
  }

  if (askSpecialCharacters) {
    draftPassword = draftPassword.concat(specialCharacter);
  }

  console.log("Created password so far: " + draftPassword);


}





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
