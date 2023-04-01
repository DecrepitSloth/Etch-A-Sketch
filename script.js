//Create divs and add event listener

function create() {
let box = document.createElement("div");
document.getElementById("container").appendChild(box); 
box.classList.add("grid");

perc = Math.round((960/boot) - 2);
document.getElementsByClassName("grid");
box.style.flexBasis = perc + "px";

box.addEventListener("mouseover", func)
    function func() {
        box.setAttribute("style", "background-color: black;")
    }
}

// Create a 16x16 div grid

document.getElementById("size").addEventListener("click", gridSelect);

let boot = 0;

function gridSelect() {
    remove();
    let y = prompt("Select how many grids per side you want.", boot);
    total = y * y;
    boot = y;
    for (i=0; i<total; i++) {
        create(); 
    }   
}

// Remove the previous grid

function remove() {
    let element = document.getElementById("container");
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
}