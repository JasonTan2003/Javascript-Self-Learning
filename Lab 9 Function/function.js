//function is like a method in C# 
//Define it once and use it many times by calling the function name

StartProgram();

function StartProgram() {
    let userName = "Ben"
    let age = 18;

    SingBirthday(userName, age);
}

//The order of the parameter does matter.
function SingBirthday(userName, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday to ${userName}.`);
    console.log(`You are now ${age} year old.`);
}