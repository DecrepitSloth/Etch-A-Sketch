//Create divs and add event listener

function create() {
let box = document.createElement("div");
document.getElementById("container").appendChild(box); 
box.classList.add("grid");
}

// Create a grid that reacts to the number you input in the prompt

document.getElementById("size").addEventListener("click", gridSelect);

let input = 0;

function gridSelect() {
    remove();
    let y = prompt("Select how many grids per side you want.", input);
    total = y * y;
    input = y;
        for (i=0; i<total; i++) {
        create(); 
        }
    perc = (960/input) - 2;
    let percentage = document.getElementById("container").children;
        for (i = 0; i < percentage.length; i++) {
        percentage[i].style.width = perc + "px";
        }
}

// Remove the previous grid

function remove() {
    let element = document.getElementById("container");
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
}