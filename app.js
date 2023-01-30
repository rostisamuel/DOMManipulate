// Select the section with an id of container without using querySelector.

document.getElementById("container");

// Select the section with an id of container using querySelector.

document.querySelector("#container");

// Select all of the list items with a class of “second”.

document.querySelectorAll(".second");

// Select a list item with a class of third, but only the list item inside of the ol tag.

document.querySelectorAll("ol .third");

// Give the section with an id of container the text “Hello!”.

const con = document.querySelector("#container");

con.innerText = "Hello!";

// Add the class main to the div with a class of footer.

const foot = document.querySelector(".footer");

foot.classList.add("main");

// Remove the class main on the div with a class of footer.

foot.classList.remove("main");

// Create a new li element.

const newLi = document.createElement("li");

// Give the li the text “four”.

newLi.innerText = "four";

// Append the li to the ul element.

const ul = document.querySelector("ul");
ul.appendChild(newLi);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.

const ol = document.querySelectorAll("ol li");

for(let list of ol){
    list.style.backgroundColor = "green";
}

// Remove the div with a class of footer

foot.remove();