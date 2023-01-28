let age = 12;

if(age >= 65)
{
    console.log("You're a senior citizen!");
}
else if(age >= 18)
{
    console.log("You're an adult!");
}
else if(age < 0)
{
    console.log("You haven't been born yet!");
}
else
{
    console.log("You're a child!");
}

//Just like C# we can use boolean as condition too
let online = false;

if(online){
    console.log("You're online!");
}
else if(!online){
    console.log("You're offline");
}

//Switch statement

let grade = 75;

switch (true) {
    case grade >= 80:
        console.log("You scored an A!");
        break;
    case grade >= 70 && grade < 80:
        console.log("You scored a B!");
        break;
    case grade >= 60 && grade < 70:
        console.log("You scored a C!");
        break;
    case grade >= 50 && grade < 60:
        console.log("You scored a D!");
        break;
    case grade >= 40 && grade < 50:
        console.log("You scored an E!");
        break;
    case grade >= 0 && grade < 40:
        console.log("You scored a F!");
        break;
    default:  
        console.log(`${grade} is not a letter grade!`);  
}