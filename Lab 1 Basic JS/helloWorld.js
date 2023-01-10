//To display texts on console uses console.log just like print() in python.
//Javascript uses single and double quotation mark for string just like python.
console.log("Hello World");

window.alert("Pop up message on browser");

//variable
// 1. Declaration (var, let, const)

//Data type such string, numbers, boolean
//Unlike C#, javascript does not define different types of numbers, like integers, short, long, float etc.
//Javascript numbers are always stored as double precision floating point numbers

let age = 18;
let nickname = "Jayden";
let check = true;

console.log(age);
console.log(nickname);
console.log(check);

//String interpolation is surround by ` symbol not "" or '', else it won't work.
console.log(`Hi ${nickname}. You are ${age} years old.`);
console.log(`Enrolled: ${check}`);

//Writing into a HTML element, using innerHTML
document.getElementById("p1").innerHTML = `Hello ${nickname}. You are ${age} years old.`;

//Arithmetic expression is a combination of... 
//operands (values, variables)
//operators (+-*/%) 

let students = 18;
//Do some math with the operands and operator

students += 1;
//This is augmented assignment operators.
//It is the same as writing student = students + 1;
//Works for all the operators mentioned above
//The operator precedence uses BODMAS to solve math equation like in real life.