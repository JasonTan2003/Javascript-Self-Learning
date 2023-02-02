//while loop, It is a pre-condition loop
let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name");
}

console.log(`Hello ${userName}`);

//do while loop is a post=condition loop
let age;

do {
    age = window.prompt("Enter your age");
} while (age <= 0);

console.log(`You are ${age} year old.`);

//for loop, repeat some code a certain amount of times, 
//unlike while loop it is usually for infinite amount of time until its condition is meeted.

for(let i = 1; i <= 10; i++){
    console.log(i);
}
//we can do a decrement in for loop too

//Nested loop, basically just a loop inside of another loop

let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt("Enter the numbers of rows");
let columns = window.prompt("Enter the number of columns");

for(let a = 1; a <= rows; a++){
    for (let b = 1; b <= columns; b++){
        document.getElementById("myRectangle").innerHTML += b;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}