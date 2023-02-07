//ternary operator = Shortcut for an if/else statement
//                  Takes 3 operands

/* 
                    1. a condition with ?
                    2. expression if True:
                    3. expression if False

                    condition ? exprIfTrue : exprIfFalse
*/

CheckWinner(true)

function CheckWinner(win){
    win ? console.log("You win!") : console.log("You LOSE!");
}

//Variable scope = where a variable is accessible

//let = variabls are limited to block scope {}, it dosn't exist outside of curly braces.
//var = variables are limited to a function(){}, it cannot escape out of a function.

//global variable = is declared outside any function
//(if global, var will change browser's window properties)

//Template literals
//It's basically string interpolation in C#
//
//For example: 
//let userName = Ben;
//console.log(`Hi ${userName}`);
//Note that we must use this ` symbol in order to do that in javascript.