// Assignment code here

// Get references to the #generate element
var specialCharacter = ("!@#$%^&*()_+=-{}[]:;~<>?")
var numbers = ("1234567890")
var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var lowercase = ("abcdefghijklmnopqrstuvwxyz")
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  

  var passwordlength = prompt("What is the length of the password?")
  console.log(passwordlength)
 
var hasuppercase = confirm("Do you want uppercase letters?")
var haslowercase = confirm("Do you want lowercase letters?")
var hasnumbers = confirm("Do you want numbers?")
var hasspecialCharacter = confirm("Do you want to add a special character?")
var userselection = ("")

if (hasuppercase === true) {
userselection = userselection + uppercase
}

if (haslowercase === true) {
  userselection = userselection + lowercase
}

if (hasnumbers === true) {
  userselection = userselection + numbers
}

if (hasspecialCharacter === true) {
  userselection = userselection + specialCharacter
}

  if (passwordlength < 8 || passwordlength > 128) {
    window.alert("Make sure it is between 8 to 128 characters long")
    return
  }
  var password = ("")

  for(var i=0; i<passwordlength; i++) {
    var random = Math.floor(Math.random()*userselection.length)
    var character = userselection[random]
    password = password + character
  }

  return password
}
// Add event listener to generate button
generateBtn.addEventListener("click" || "Enter", writePassword);
