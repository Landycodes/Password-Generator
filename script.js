// Assignment Code
var generateBtn = document.querySelector("#generate");    /*og code*/

// Write password to the #password input
function writePassword() {    /*og code*/
  var password = generatePassword();    /*og code*/
  function generatePassword() {
    var char = ""
    var lowChar = "abcdefghijklmnopqrstuvwxyz";
    var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numChar = "0123456789";
    var specChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    var pass = '';
    var charCount = window.prompt('how many characters would you like?')
    

      if (charCount < 8 || charCount > 128) {
        window.alert('invalid character count');
        return;
      }

      var askLow = window.prompt('do you want lowercase characters? [y/n]')
      if (askLow === 'y' || askLow ==='Y') {
        char = char + lowChar;
      } 

      var askUp = window.prompt('do you want uppercase characters? [y/n]')
      if (askUp === 'y' || askUp ==='Y') {
        char = char + upChar;
      }

      var askNum = window.prompt('do you want numbers? [y/n]')
      if (askNum === 'y' || askNum ==='Y') {
        char = char + numChar;
      }
      
    var askSpec = window.prompt('do you want special characters? [y/n]')
      if (askSpec === 'y' || askSpec ==='Y') {
        char = char + specChar;
      }

      for (i = 1; i <= charCount; i++) {
      var random = Math.floor(Math.random() * char.length);
        pass += char.substring(random, random + 1);
      }
      return pass;
    
  }
  var passwordText = document.querySelector("#password");   /*og code*/

  passwordText.value = password;    /*og code*/
  
}   /*og code*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);   /*og code*/
