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

  // Store all characters from requested arrays in a draft string
  var draftPassword = "";

  // 2. App goes through some kind of loop that concatenates a random letter from each array into a draft string and repeats it as long as the amount of requested characters are met 
  while (draftPassword.length < askPasswordLength) {

    // Choose random character from uppercase characters array
    if (askUpperCaseCharacters && draftPassword.length < askPasswordLength) {

      function randomNumber() {
        var i = Math.floor(Math.random() * upperCaseCharacter.length);
        console.log(i);
        draftPassword = draftPassword.concat(upperCaseCharacter[i]);
      }
      randomNumber();

    }

    if (askLowerCaseCharacters && draftPassword.length < askPasswordLength) {
      function randomNumber() {
        var i = Math.floor(Math.random() * lowerCaseCharacter.length);
        console.log(i);
        draftPassword = draftPassword.concat(lowerCaseCharacter[i]);
      }
      randomNumber();

    }

    if (askNumberCharacters && draftPassword.length < askPasswordLength) {

      function randomNumber() {
        var i = Math.floor(Math.random() * numberCharacter.length);
        console.log(i);
        draftPassword = draftPassword.concat(numberCharacter[i]);
      }
      randomNumber();

    }

    if (askSpecialCharacters && draftPassword.length < askPasswordLength) {
      function randomNumber() {
        var i = Math.floor(Math.random() * specialCharacter.length);
        console.log(i);
        draftPassword = draftPassword.concat(specialCharacter[i]);
      }
      randomNumber();

    }
  }

  console.log("Created password so far: " + draftPassword);

  // 3. App randomizes the draft password
  function stringRandomizer() {

    // Convert the draft to an array
    var newArray = draftPassword.split("");
    console.log(newArray);
    
    // Randomize that array
    newArray.sort(() => Math.random() - 0.5);

    //Put the array back together as a string
    draftPassword = newArray.join("");
  }

  stringRandomizer();

  console.log("Randomized password: " + draftPassword);

  var finalPassword = draftPassword;
  console.log("Final password: " + finalPassword)
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
