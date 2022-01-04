// Assignment code here

// Available characters (ADD REST ONCE CODE WORKS)
upperCaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lowerCaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numberCharacter = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
specialCharacter = ["!", "@", "#", "€", "%", "&", "/", "(", ")", "=", "?"];

// Store users answers in variables
var askPasswordLength = "";
var askUpperCaseCharacters = false;
var askLowerCaseCharacters = false;
var askNumberCharacters = false;
var askSpecialCharacters = false;

// Store all characters in an array as a "draft" of the final password
var draftPassword = [];

// 1. App asks user a series of questions to determine what kinds of characters to include in password
function generatePassword() {

  // Q1. Password length
  var askPasswordLength = window.prompt("How long would you like your password to be? Answer with a number between 8-128.");

  // Validate the answer and ask correction if it's not a number between 8 and 128
  while (isNaN(askPasswordLength) || askPasswordLength <= 7 || askPasswordLength >= 128) {
    window.alert("You must pick a number between 8 and 128 as the length of your password.");
    var askPasswordLength = window.prompt("How long would you like your password to be? Answer with a number between 8-128.");
  }

  // Q2. Ask if user wants uppercase letters
  var askUpperCaseCharacters = window.confirm("Would you like your password to include uppercase characters?")

  // Q3. Ask if user wants lowercase letters
  var askLowerCaseCharacters = window.confirm("Would you like your password to include lowercase characters?")

  // Q4. Ask if user wants numbers
  var askNumberCharacters = window.confirm("Would you like your password to include numbers?")

  // Q5. Ask if user wants special characters
  var askSpecialCharacters = window.confirm("Would you like your password to include special characters?")

  // Validate the answers to make sure user chose yes to at least one category of characters
  while (askUpperCaseCharacters === false && askLowerCaseCharacters === false && askNumberCharacters === false && askSpecialCharacters === false) {
    window.alert("You must pick at least one type of character to include in your password to continue.");
    var askUpperCaseCharacters = window.confirm("Would you like your password to include uppercase characters?")
    var askLowerCaseCharacters = window.confirm("Would you like your password to include lowercase characters?")
    var askNumberCharacters = window.confirm("Would you like your password to include numbers?")
    var askSpecialCharacters = window.confirm("Would you like your password to include special characters?")
  }


  // 2. App goes through a loop that adds (concatenates) a random letter from each character array into draftPassword array and loops until the value of draftPassword.length is the same as the value of askPasswordLength 
  while (draftPassword.length < askPasswordLength) {

    // Add a character from upperCaseCharacter array
    if (askUpperCaseCharacters && draftPassword.length < askPasswordLength) {

      function randomNumber() {
        var i = Math.floor(Math.random() * upperCaseCharacter.length);
        draftPassword = draftPassword.concat(upperCaseCharacter[i]);
      }
      randomNumber();

    }

    // Add a character from lowerCaseCharacter array
    if (askLowerCaseCharacters && draftPassword.length < askPasswordLength) {
      function randomNumber() {
        var i = Math.floor(Math.random() * lowerCaseCharacter.length);
        draftPassword = draftPassword.concat(lowerCaseCharacter[i]);
      }
      randomNumber();

    }

    // Add a character from numberCharacter array
    if (askNumberCharacters && draftPassword.length < askPasswordLength) {

      function randomNumber() {
        var i = Math.floor(Math.random() * numberCharacter.length);
        draftPassword = draftPassword.concat(numberCharacter[i]);
      }
      randomNumber();

    }

    // Add a character from specialCharacter array
    if (askSpecialCharacters && draftPassword.length < askPasswordLength) {
      function randomNumber() {
        var i = Math.floor(Math.random() * specialCharacter.length);
        draftPassword = draftPassword.concat(specialCharacter[i]);
      }
      randomNumber();
    }
  }

  console.log("Randomly picked characters for this password: " + draftPassword);

  // 3. App randomizes the picked characters
  function orderRandomizer() {

    // New array to temporarily store randomized characters in
    var newArray = draftPassword;

    // Randomize temporary array
    newArray.sort(() => Math.random() - 0.5);

    //Put the temporary array back together in the original variable
    draftPassword = newArray.join("");
  }

  // Run array randomizer
  orderRandomizer();
  var randomPassword = draftPassword;
  console.log("Final randomized password: " + randomPassword)
  return randomPassword
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
