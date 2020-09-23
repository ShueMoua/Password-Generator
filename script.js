// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    //   passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
    // Prompts the user to choose the length of his password
    var charlength = prompt("Choose a length for your password between 8 and 128 characters:");

    console.log(charlength);

    alert("You want your password to be " + charlength + " characters.")

    // Confirms if the user wants uppercase characters
    var charupper = confirm("Do you want uppercase characters included in your password?")

    console.log(charupper)

    // Notifies the user of the option he choose
    if (charupper) {
        alert("You want to include uppercase characters in your password.");

    } else {
        alert("You do not want to include uppercase characters in your password.");
    }

    // Confirms if the user wants numbers
    var charnum = confirm("Do you want numbers included in your password?")

    console.log(charnum)

    // Notifies the user of the option he choose
    if (charnum) {
        alert("You want to include numbers in your password.");

    } else {
        alert("You do not want to include numbers in your password.");
    }

    // Confirms if the user wants special characters
    var charspec = confirm("Do you want special characters included in your password?")

    console.log(charspec)

    // Notifies the user of the option he choose
    if (charspec) {
        alert("You want to include special characters in your password.");

    } else {
        alert("You do not want to include special characters in your password.");
    }
}