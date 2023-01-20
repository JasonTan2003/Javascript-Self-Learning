/*Before allow users to enter we need a prompt to tell them what to enter.
 Just other programming language.
*/

//Easy way with window prompt
//let username = window.prompt("What's your name?");
//console.log(username);

//Advance way HTML textbox
let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value; //Take the value that we enter and assign it to username
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username; //Change the label after we enter our name to Hello ...
}


//Type conversion

let age = window.prompt("How old are you?");

//Use the Number constructor to explicitly change the data type of a varable.
//the typeof will tell us the data type of that variable just like in python we use type()
age = Number(age);
console.log(typeof age);
age += 1;

console.log("Happy Birthday! You are now " + age + " years old.");


let x;
let y;
let z;

x = Number(3.14);
y = String(3.14);
z = Boolean(""); //Empty will result in false, if enter any string it will be true

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

//Another data type is const stands for constant. It cannot be change.
//We usually uses all CAPITAL LETTER for the variable name of const
//For example

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * PI * radius;
console.log(`The circumference is ${circumference}`);


//Math object. It provides basic mathematics functionality and constants.
let abc;
let abd = 3;
let dba = 9;
let maximum;
let minimum;

//abc = Math.round(abc);
//abc = Math.floor(abc);
//abc = Math.ceil(abc);
//abc = Math.pow(abc, 2);
//abc = Math.sqrt(abc);
//abc = Math.abs(abc);
//maximum = Math.max(abc, abd, dba);
//minimum = Math.min(abc, abd, dba);
abc = Math.PI;

console.log(abc);
