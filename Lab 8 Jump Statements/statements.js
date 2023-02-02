//break = breaks out of a loop entirely
//continue = skip an interation of a loop

for(let i = 1; i <= 20; i++){
    if(i == 13){
        continue; //Change to break to see the difference.
    }
    console.log(i);
}

//return = returns a value back to the place where you invoked a function
//For example

let area;
let length;
let width;

length = window.prompt("Enter the length");
width = window.prompt("Enter the width");

area = getArea(length, width);

console.log(`The area of the reactangle is ${area}`);

function getArea(pLength, pWidth){
    return pLength * pWidth;  
}