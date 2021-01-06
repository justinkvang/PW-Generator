// Assignment Code
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() { 
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password; 

}
// This function creates the password 
function generatePassword() {
  var passwordLength = prompt("Enter desired length of password? Min. 8 charecters and Max 128 charecters");
  if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Please enter required password length. Min. 8 charecters and Max 128 charecters");
  }

  var pass = '';
  var str = '';

  // This confirms with user on what charecters they want included in the password
  var lowercaseCheck = confirm("Do you want to include lowercase?");
  var uppercaseCheck = confirm("Do you want to include uppercase?");
  var numericCheck = confirm("Do you want to include numeric?");
  var specialCheck = confirm("Do you want to include special?");
  
  // This is used to include what spcific strings/charecters the user selected
  var lowercaseStr = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numericStr = '0123456789';
  var specialStr = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
  
  if (lowercaseCheck === true) {
    str += lowercaseStr;
  }
  if (uppercaseCheck === true) {
    str += uppercaseStr;
  }
  if (numericCheck === true) {
    str += numericStr;
  }
  if (specialCheck === true) {
    str += specialStr;
  }

  // This converts passwordlength string into a interger 
  var convertedPasswordLength = parseInt(passwordLength);

  // This for loop generates the password from the selected condition
  for (i = 1; i <= convertedPasswordLength; i++) { 
    var charIndex = Math.floor(Math.random() 
                * str.length + 1); 
      
    pass += str.charAt(charIndex) 
} 
  
return pass;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

