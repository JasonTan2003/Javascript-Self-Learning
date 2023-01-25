//In c# we have a random class but in Javascript they don't, 
//but instead they have a random method that generate a number between 0 and 1.
//For example we are rolling dices, there are 6 different outcomes from a single dice.
//The reason we use floor method is because javascript always returns double precision numbers,
//and the +1 at the end is becase the random method starts counting from 0, so without +1 it will only reach 5 at the maximum
let x;
let y;
let z;

document.getElementById("rollButton").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xLabel").innerHTML = x;
    document.getElementById("yLabel").innerHTML = y;
    document.getElementById("zLabel").innerHTML = z;
}