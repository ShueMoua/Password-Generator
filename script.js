// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowabcs = "abcdefghijklmnopqrstuvwxyz";
var upabcs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var spec = "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

      passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
    // Prompts the user to choose the length of his password
    var charlength = prompt("Choose a length for your password between 8 and 128 characters:");

    // User will have to reselect a value if it isn't between 8 - 128
    while (charlength < 8 || charlength > 128) {
        alert("Error: Please select a length for your password between 8 and 128 charcters.");

        var charlength = prompt("Choose a length for your password between 8 and 128 characters:");
    }

    // Notifies the user if how long their password will be
    alert("You want your password to be " + charlength + " characters.")

    console.log(charlength);

    // Do while loop, so user will have to select at least 1 character option
    do {
        // Confirms if the user wants lowercase characters
        var charlower = confirm("Do you want lowercase characters included in your password?");

        console.log(charlower);

        // Notifies the user of the option he choose
        if (charlower) {
            alert("You want to include lowercase characters in your password.");

        } else {
            alert("You do not want to include lowercase characters in your password.");
        }

        // Confirms if the user wants uppercase characters
        var charupper = confirm("Do you want uppercase characters included in your password?");

        console.log(charupper);

        // Notifies the user of the option he choose
        if (charupper) {
            alert("You want to include uppercase characters in your password.");

        } else {
            alert("You do not want to include uppercase characters in your password.");
        }

        // Confirms if the user wants numbers
        var charnum = confirm("Do you want numbers included in your password?");

        console.log(charnum);

        // Notifies the user of the option he choose
        if (charnum) {
            alert("You want to include numbers in your password.");

        } else {
            alert("You do not want to include numbers in your password.");
        }

        // Confirms if the user wants special characters
        var charspec = confirm("Do you want special characters included in your password?");

        console.log(charspec);

        // Notifies the user of the option he choose
        if (charspec) {
            alert("You want to include special characters in your password.");

        } else {
            alert("You do not want to include special characters in your password.");
        }
        // If statement to notify user that they have to select at least 1 character option
        if (charlower === false && charupper === false && charnum === false && charspec === false) {
            alert("Error: Please select at least 1 character option.")
        }
    }
    // If user doesn't select at least 1 character option, it will loop them back to choose at least 1 option
    while (charlower === false && charupper === false && charnum === false && charspec === false);

    var panda = "";
    // Let's the random code know characters to add to the password 
    if (charlower === true) {
      panda += lowabcs;
    }
    if (charupper === true) {
      panda += upabcs;
    }
    if (charnum === true) {
      panda += nums;
    }
    if (charspec === true) {
      panda += spec;
    }
    // Code to let the computer know how long the user wants the password, and which characters the user wants
    var password = "";
    for (i = 0; i < charlength; i++) {
      var random = Math.floor(Math.random() * panda.length);
      password += panda[random];
    }
    return password
    
  }
