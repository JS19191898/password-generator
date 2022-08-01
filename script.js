// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = '0123456789';
var special = '!@#$%^&*()_+-=';
var userChoice = '';


// Write password to the #password input
function generatePassword() {
  var password = "";

  var passwordLength = parseInt(window.prompt("How many characters would you like in your password? **Between 8-15"))



  if(passwordLength < 8 || passwordLength > 15){
    alert("Please choose a length between 8 and 15!")
    return;
  } else {

    var wantLowercase = window.confirm("Would you like lowercase letters in your password?")
    var wantUppercase = window.confirm("Would you like uppercase letters in your password?")
    var wantNums = window.confirm("Would you like numbers in your password?")
    var wantSpecials = window.confirm("Would you like special characters in your password?")

    // we only want to add the lowercase varialbe IF they say they wantLowercase (true) otherwise do nothing
    if(wantLowercase){
      userChoice += lowercase  // userchoice + lowercase = userChoice
    }

    if(wantUppercase){
      userChoice += uppercase  // userchoice + upperrcase = userChoice
    }

    if(wantNums){
      userChoice += numbers  // userchoice + numbers = userChoice
    }

    if(wantSpecials){
      userChoice += special  // userchoice + special = userChoice
    }

    console.log("userchoice", userChoice)

    for(var i = 0; i < passwordLength; i++){

      var randomizer = Math.floor(userChoice.length * Math.random())
      console.log("randomizer", randomizer)
      var finalPassword = password += userChoice.charAt(randomizer)

      console.log(finalPassword)

    }

    var passwordText = document.querySelector("#password");

    passwordText.value = finalPassword;
    
  }



}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
