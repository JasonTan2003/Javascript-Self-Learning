let username = "Jayden Tan";
let phoneNum = '123-456-7890';

//console.log(username.length);
//console.log(username.charAt(0));

//The indexOf method here finds the first occurrence of n in the variable.
//console.log(username.indexOf("n"));
//console.log(username.lastIndexOf("n"));

//Just like C# trim method remove trailling spaces and toUpper change it to capital. Instead of toUpper javascript uses toUpperCase.
//username = username.trim();
//username = username.toUpperCase();
//username = username.toLowerCase();

phoneNum = phoneNum.replaceAll("-", "");
console.log(phoneNum);

//Slicing
//The slice method contains 2 inputs starting index and ending index, it doesn't include the ending index.
//If it doesn't include an ending index it will include all the remaining string till the end.
let firstName;
let lastName;

//firstName = username.slice(0, 6);
//lastName = username.slice(7)
//We can also use an alternative way to find out the lastName and firstName.

firstName = username.slice(0, username.indexOf(" "));
lastName = username.slice(username.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

//Method chaining 
//Basically calling a method after another in one continious line of code

let userName = "ben";

let letter = userName.charAt(0).toUpperCase().trim();
console.log(letter);