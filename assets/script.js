var generateBtn = document.querySelector("#generate");

// Function that generates password
function generatePassword() {
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

  //Empty strings where the password & possible characters (alphabet,numbers, special) will be stored after the user answers prompts
  var password = "";
  var possibleCharacters = "";
  var characterTypes = "";

  //if user selects 'OK' for lowercase (or 'true'), we add all lowercase letters to possible characters
  //Same thing applies to the rest of the if statementes
  if (lowercase) {
    possibleCharacters += "abcdefghijklmnopqrstuvwxyz";
    characterTypes += "lowercase,";
  }

  if (uppercase) {
    possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    characterTypes += "uppercase,";
  }

  if (numbers) {
    possibleCharacters += "0123456789";
    characterTypes += "numbers,";
  }

  if (specialCharacters) {
    possibleCharacters += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
    characterTypes += "special characters";
  }

  //If all options have been selected, The possibleCharacters string looks like: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\"
  //The characterTypes string looks like: "lowercase, uppercase, numbers, specialCharacters,"

  //This alerts the user what characterTypes they have selected
  alert("You have selected " + characterTypes + ".");

  //This for loop will create the password
  //(i = the password & the password starts at 0 characters; loop runs for length of password chosen by user; i++ adds a character everytime the password length is less than what the user asked for.)

  for (var i = 0; i < passwordLength; i++) {
    // The += operator is used to concatenate strings. Shorthand for (password = password + random chose character)
    //the .charAt function selects a random character from possibleCharacters.
    //The function decides which character to pick by using the Math.random function that chooses a random number between 0 & 1.
    //The Math.random value is multiplied using the asterisk* by the length of possibleCharacters. The math.floor function rounds this value to the nearest integer.
    password += possibleCharacters.charAt(
      Math.floor(Math.random() * possibleCharacters.length)
    );
  }

  //logs and writes generated password to page
  console.log(password);
  return password;
}

//function that writes password to page.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //We assign the generated password to the passwordText var and assign that var to the #password in the html document
}

// Event listener listens to when button is clicked.
generateBtn.addEventListener("click", writePassword);
