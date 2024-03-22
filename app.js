// Q1
// // var firstName = prompt("Enter your first name:");
// // var lastName = prompt("Enter your last name:");
// // var fullName = firstName + " " + lastName;
// // alert("Hello, " + fullName + "! Welcome.");
// // Q2
//         // var favoritePhoneModel = prompt("Enter your favorite mobile phone model:");
//         // var inputLength = favoritePhoneModel.length;
//         // document.write("<h1>My favorite mobile phone model is: " + inputLength + "</h1>");
//         // // Q3
//         //         var word = "Pakistani";
//         // var index = word.indexOf('n');
//         // document.write("<h1> String :Pakistani <br> index of 'n': " + index + "</h1>"); 
//         // Q4
//         // var word = "Hello World";
//         // var lastIndex = word.lastIndexOf('l');
//         // document.write("<h1> String :Hello World <br> index of 'l': " + lastIndex + "</h1>"); 
// // Q5
// // var word = "Pakistani";
// // var charAtIndex3 = word.charAt(3);
// // document.write("<h1>String:pakistani <br> Charater at index 3: " + charAtIndex3 + "</h1>");
// // // Q6
// // var firstName = prompt("Enter your first name:");
// // var lastName = prompt("Enter your last name:");
// // var fullName = firstName.concat(" ", lastName);
// // alert("Hello, " + fullName + "! Welcome.");
// // Q7
// // var word = "Hyderabad";
// //         var replacedWord = word.replace("Hyder", "Islam");
// //         document.write("<h1>City: " + word + "</h1>");
// //         document.write("<h1>After replacement: " + replacedWord + "</h1>");
// // Q8
// // var message = "Ali and Sami are best friends. They play cricket and football together.";
// // var replacedMessage = message.split("and").join("&");
// // document.write("<h1>Original message: " + message + "</h1>");
// // document.write("<h1>After replacement: " + replacedMessage + "</h1>");
// // Q9
// // var str = "472";
// //         var num = parseInt(str);

// //         // Display the original string value and type
// //         document.write("<h2>Value: " + str + "</h2>");
// //         document.write("<h2>Type: " + typeof str + "</h2>");

// //         // Display the converted number value and type
// //         document.write("<h2>Value: " + num + "</h2>");
// //         document.write("<h2>Type: " + typeof num + "</h2>");
// // Q10
// // var userInput = prompt("Enter your text:");
// //         var upperInput = userInput.toUpperCase();
// //         document.write("<h1>user Input: " + userInput + "</h1>");
// //         document.write("<h1> upper case: " + upperInput + "</h1>");

// // Q11

// // var userInput =prompt("Enter your text:")
// // var firstChar =userInput.slice(0,1).toUpperCase();
// // var remanChar =userInput.slice(1).toLowerCase();
// // document.write(firstChar+remanChar);
// // Q12
// // var num = (35.36)
// // var result = num.toString().replace(".","");
// // document.write("<h1> Number: " + num + "</h1>");
// // document.write("<h1> Result: " + result + "</h1>");
// // Q13
// // Function to check if the username contains any special symbols
// // function containsSpecialSymbol(username) {
// //     for (var i = 0; i < username.length; i++) {
// //         var charCode = username.charCodeAt(i);
// //         if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
// //             return true;
// //         }
// //     }
// //     return false;
// // }

// // // Prompting the user for input
// // var username = prompt("Enter your username:");

// // // Checking if the username contains any special symbols
// // if (containsSpecialSymbol(username)) {
// //     alert("Please enter a valid username without special symbols like '@', '.', ',', or '!'");
// // } else {
// //     alert("Username accepted: " + username);
// // }
// // Q14
// // // Define the array
// // var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // // Function to perform case-insensitive search in the array
// // function searchItem(array, searchTerm) {
// //     searchTerm = searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive comparison
// //     for (var i = 0; i < array.length; i++) {
// //         if (array[i].toLowerCase() === searchTerm) {
// //             return true;
// //         }
// //     }
// //     return false;
// // }

// // // Prompt the user for input
// // var userInput = prompt("Enter an item to search:");

// // // Perform the search
// // var isFound = searchItem(A, userInput);

// // // Display the result
// // if (isFound) {
// //     alert("Yes, '" + userInput + "' is found in the list.");
// // } else {
// //     alert("No, '" + userInput + "' is not found in the list.");
// // }
// // Q15
// // // Function to check if the password meets the requirements
// // function isValidPassword(password) {
// //     // Requirement 1: It should contain alphabets and numbers
// //     var hasAlphabets = false;
// //     var hasNumbers = false;
// //     for (var i = 0; i < password.length; i++) {
// //         var charCode = password.charCodeAt(i);
// //         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
// //             hasAlphabets = true;
// //         } else if (charCode >= 48 && charCode <= 57) {
// //             hasNumbers = true;
// //         }
// //     }

// //     // Requirement 2: It should not start with a number
// //     var startsWithNumber = !isNaN(parseInt(password.charAt(0)));

// //     // Requirement 3: It must be at least 6 characters long
// //     var isLengthValid = password.length >= 6;

// //     // Check if all requirements are met
// //     return hasAlphabets && hasNumbers && !startsWithNumber && isLengthValid;
// // }

// // // Prompt the user for input
// // var password = prompt("Enter your password:");

// // // Check if the password is valid
// // if (isValidPassword(password)) {
// //     alert("Password accepted.");
// // } else {
// //     alert("Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long.");
// // }

// // Q16
// // // Define the string
// // var university = "University of Karachi";

// // // Convert the string to an array using split method
// // var universityArray = university.split(" ");

// // // Display the elements of the array in the browser
// // document.write("<h1>Elements of the Array:</h1>");
// // document.write("<ul>");
// // for (var i = 0; i < universityArray.length; i++) {
// //     document.write("<li>" + universityArray[i] + "</li>");
// // }
// // document.write("</ul>");
// // Q17
// //   var userInput = prompt("Enter a string:");
// //   var lastCharacter = userInput.charAt(userInput.length - 1);
// //   document.write("<h2>user input:"+userInput+"</h2>");
// //   document.write("<h2>Last charater of input:" + lastCharacter + "</h2>");
// // Q18
// // var sentence = "The quick brown fox jumps over the lazy dog";
// //         var lowerCaseSentence = sentence.toLowerCase();
// //         var wordToSearch = "the";
// //         var words = lowerCaseSentence.split(" ");
// //         var count = 0;
// //         for (var i = 0; i < words.length; i++) {
// //             if (words[i] === wordToSearch) {
// //                 count++;
// //             }
// //         }
// //         document.write("<h1>Text:"+sentence+"</h1>")
// //         document.write("<h1>There are " + count + " occurrence(s) of the word 'the'"+ "</h1>");
   
// // Chapter 21 (Changing Case)
// // // Q1
// // var allLower = userInput.toLowerCase();
// // // Q2
// // x = x.toLowerCase();
// // // Q3
// // y = y.toUpperCase();
// // // Q4
// // var lowerCaseStr = str.toLowerCase();
// // // Q5
// // var lowerCaseElement = arr[index].toLowerCase();
// // // Q6
// // var upperCaseStr = str.toUpperCase();
// // alert(upperCaseStr);
// // // Q7
// // var cityName = "kaRacHi";
// // var capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
// // alert(capitalizedName);

// // Chapter 22 - 25 (Strings)
// Q1
// var word=("captain")
// var some=word.slice(1,3)
// document.write("<h2>First:"+word+"</h2>")
// document.write("<h2>After:"+some+"</h2>")
//     // Q2
//     var num =("45")
// // Q3
// var animal=("elephant")
// var ani=animal.slice(2,6)
// document.write("<h2>Animal:"+ animal+"</h2>" )
// document.write("<h2>After Animal:"+ani+"</h2>" )
// Q4

// original_string = "Hello, world!"
// num_characters = (original_string)
// num_characters_assigned = num_characters
// document.write("<h2> String:"+ num_characters+"</h2>")
// document.write("<h2>Assigned the second variable:" +num_characters_assigned+"</h2>")
// Q5
// var amu=("pneumonoultramicroscopicsilicovolcanoconiosis")
// var index= amu.indexOf();
// document.write("<h2>The world longest word:"+amu+"</h2>")
// document.write("<h2>After "+index+"</h2>")
// // Q6
// var text =("To be or not to be");
// var indx = text.indexOf("be");
// document.write("<h2>Text:"+text+"</h2>")
// document.write("<h2>After Text:"+indx+"</h2>")
// Q7
// var text = ("To be or not to be");
// var indx = text.lastIndexOf("be");
// document.write("<h2>Text:"+text+"</h2>")
// document.write("<h2>After Text:"+indx+"</h2>")
// Q8
// var text = ("Let's go,go,go,go!");
// var indx = text.lastIndexOf("go");
// document.write("<h2>Text:"+text+"</h2>")
// document.write("<h2>After Text:"+indx+"</h2>")
// Q9
// Q10
// var str = "abcde";
// var characterAtIndex2 = str.charAt(2);
// document.write("<h2>Text:"+str+"</h2>")
// document.write("<h2>Character at index 2:"+ characterAtIndex2+"</h2>");
// Q11
// var amu=("pneumonoultramicroscopicsilicovolcanoconiosis")
// var cha = amu.charAt(10);
// document.write("<h2>The world longest word:"+amu+"</h2>")
// document.write("<h2>After :"+cha +"</h2>")

    // Q12
//     var amu=("pneumonoultramicroscopicsilicovolcanoconiosis")
// var x = amu.charAt(amu.length - 1);
// document.write("<h2>The world longest word:"+amu+"</h2>")
// document.write("<h2>After :"+x +"</h2>")
// Q13
// var input = "example string";
// var cha = input.charAt(4);
// document.write("<h2>Text:"+input+"</h2>")
// document.write("<h2>The 5th character in the string is:"+cha+"</h2>");













