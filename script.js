// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create generatePassword function
function generatePassword() {
  console.log("Hey! You clicked the button");

  var passwordLength = parseInt(
    prompt(
      "How many characters should your password include? Enter a number between 8 and 128."
    )
  );

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(
      prompt("Invalid input. Please enter a numeric value between 8 and 128.")
    );
  }

  // Character Types
  var lowercase = confirm("Include lowercase letters in the password?");
  var uppercase = confirm("Include uppercase letters in the password?");
  var numbers = confirm("Include numbers in the password?");
  var specialCharacters = confirm(
    "Include special characters in the password?"
  );

  // If user says no to all characters types, user receives an alert asking them
  // to try again and choose at least 1.
  while (!lowercase && !uppercase && !numbers && !specialCharacters) {
    alert("Please confirm at least one character type to generate a password.");
    lowercase = confirm("Include lowercase letters in the password?");
    uppercase = confirm("Include uppercase letters in the password?");
    numbers = confirm("Include numbers in the password?");
    specialCharacters = confirm("Include special characters in the password?");
  }

  //Empty strings where the password, possible characters (alphabet,numbers, special)
  //will be stored.
  var password = "";
  var possibleCharacters = "";
  var characterTypes = "";

  //if user selects 'OK' for lowercase, we add all lowercase letters to possible
  //characters
  if (lowercase) {
    possibleCharacters += "abcdefghijklmnopqrstuvwxyz";
    characterTypes += "lowercase,";
  }

  //if user selects 'OK' for uppercase, we add all uppercase letters to possible
  //characters
  if (uppercase) {
    possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    characterTypes += "uppercase,";
  }

  //if user selects 'OK' for numbers, we add all numbers to possible characters
  if (numbers) {
    possibleCharacters += "0123456789";
    characterTypes += "numbers,";
  }

  //if user selects 'OK' for special characters, we add all special characters to possible
  //characters
  if (specialCharacters) {
    possibleCharacters += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
    characterTypes += "special characters,";
  }

  //at this point in the code, the user has been asked to select
  //character types to include into the password and the
  //function has stored the responses onto the variables called
  //'characterTypes' and 'possibleCharacters'

  //If all options have been selected,
  //The possibleCharacters string looks like:
  //"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\"
  //The characterTypes string looks like:
  //"lowercase, uppercase, numbers, specialCharacters,"

  //Here we use the .slice method to create a new string
  //containing all characters inluded in chosen character types
  //except for the last character which is a comma
  //All characterType strings have a comma at the end since we
  //dont know which ones the user will say yes to.
  //That is why we use this slice method to include all characters
  //except the last one. The first number in the .slice method
  //selects the included starting point & the second number
  //selects the finishing point and excludes it.
  characterTypes = characterTypes.slice(0, -1);

  //This alerts the user what characterTypes they have selected
  alert("You have selected " + characterTypes + ".");

  //This for loop will create the password
  //i = the password and the password starts at 0 characters
  //the loops runs for the length of the password that the user chooses
  //if user wants the password to have 9 characters, the loops runs 9 times
  //i++ adds a character everytime the password length is less than what the
  //user asked for. (9 times in example) (adds 9 characters, random characters in this case)

  for (var i = 0; i < passwordLength; i++) {
    //This is executed every time the for loop runs (9 times in example)

    //password = (password "" empty string) + (random character chosen from possibleCharacters string
    //the .charAt function selects a random character from possibleCharacters. The function decides
    //which character to pick by using the math.random function that chooses a random number
    //between 0 and 1. The math.random value is multiplied using the asterisk* by the
    //length of possibleCharacters. The math.floor function rounds the value
    //of math.random*possible.Characters to the nearest integer.
    password += possibleCharacters.charAt(
      Math.floor(Math.random() * possibleCharacters.length)
    );
  }

  //logs and returns password written to page.
  console.log(password);
  return password;
}

//function that writes password to page.
//inside is function that generates password
//we assign the password to the passwordText variable and assign that variable
//to the #password id in the html document.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener listens to when button is clicked.
generateBtn.addEventListener("click", writePassword);
