let age = 20;
let name = "Declan Johnson";

console.log(age);

age = 21;
console.log(age);

const eyeColor = "green";
let favoriteColor = "";

// scope is where variables can be referenced
if(age == 21) {
    //now in a different scope
    //inside this scope we can reference variables declared outside this scope
    console.log(name);

    //declare a variable in an inner scope
    favoriteColor = "Blue";

} 

console.log(favoriteColor);

//pull something from the HTML page
document.querySelector("h1").style.color = favoriteColor;
