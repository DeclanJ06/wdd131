// select an HTML element from the DOM
// save it to a local variable called heading
let heading = document.querySelector("h1");

console.log(heading);

heading.style.color = "blue";
heading.style.fontSize = "3em";
// CSS: font-size

// Challenge
heading.style.border = "2px solid black";

// everything on one line
document.querySelector("p").style.color = "blue";

// there are different ways to select from the DOM
document.getElementById("topics")

// you can select more than one element at a time
// returns a list of elements
document.querySelectorAll(".list");

// Apply a class to an element
let topicsClassList = document.querySelector("#topics").classList;

topicsClassList.add("special");
topicsClassList.toggle("special");


let selectElem = document.getElementById('webdevlist');

selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = codeValue;
})
                