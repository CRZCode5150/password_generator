//Input Variables
var enter;
var confirmChar;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;

var char = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var space = [];
var choice;

//converts letters to uppercase // .toUpperCase method returns the calling string value converted to uppercase
var changeToUpperCase = function(z){
      return z.toUpperCase();
};

//creating variable for uppercase conversion //.map means to create a new array from calling a function for every array element. (creates new array of uppercased letters)
abc2 = abc.map(changeToUpperCase);

var get = document.querySelector("#generate");

// saying when we click, run 'generatePassword' function and add the output to the placeholder
get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Function for the prompts and options for criteria, using if else statements to give conditions
function generatePassword(){

  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 & 128"));
    if(!enter){
      alert("This needs a value");
    } else if (enter < 8 || enter > 128){
      enter = parseInt(prompt("You must choose between 8 & 128"));
    } else {
      confirmNumber = confirm("Click OK to confirm including special characters");
      confirmChar = confirm("Click OK to confirm including numeric characters");
      confirmUppercase = confirm("Click OK to confrim including uppercase letters");
      confirmLowercase = confirm("Click OK to confrim including lowercase letters");
    };

    //using '!' to show a negative option
    if(!confirmChar && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choice = alert("You must choose a criteria!");
    }
    //else if statements for positive options 
    else if (confirmChar && confirmNumber && confirmUppercase && confirmLowercase) {
      choice = char.concat(number, abc, abc2);
    }
    else if (confirmChar && confirmNumber && confirmUppercase) {
      choice = char.concat(number, abc2);
    }
    else if (confirmChar && confirmNumber && confirmLowercase) {
      choice = char.concat(number, abc);
    }
    else if (confirmChar && confirmUppercase && confirmLowercase) {
      choice = char.concat(abc, abc2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choice = number.concat(abc, abc2);
    }
    else if (confirmNumber && confirmChar) {
      choice = number.concat(char);
    }
    else if (confirmChar && confirmUppercase) {
      choice = char.concat(abc2);
    }
    else if (confirmChar && confirmLowercase) {
      choice = char.concat(abc)
    }
    else if (confirmLowercase && confirmNumber) {
      choice = abc.concat(number)
    }
    else if (confirmLowercase && confirmUppercase) {
      choice = abc.concat(abc2);
    }
    else if (confirmNumber && confirmUppercase) {
      choice = number.concat(abc2);
    }
    else if (confirmChar) {
      choice = character;
    }
    else if (confirmNumber) {
      choice = number;
    }
    else if (confirmLowercase) {
      choice = abc;
    }
    else if (confirmUppercase) {
      choice = space.concat(abc2);
    };
  
    //creating a variable 'password' with empty brackets so we can string data in
    var password = [];

    //for loop to increment the amount of characters desired at random due to math.random
    // .push is pushing the pickchoice data into the brackets in the variable 'password'
    for (var i = 0; i < enter; i++) {
      var pickChoice = choice[Math.floor(Math.random() * choice.length)];
      password.push(pickChoice);
    }
    //calling the function and returning password
    getPassword(password);
    return password;
}

// password is displayed on screen, password value is passed through textContent
function getPassword(password) {
  document.getElementById("password").textContent = password;
}
