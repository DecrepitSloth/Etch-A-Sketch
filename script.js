//Create divs and add event listener

function create() {
let box = document.createElement("div");
document.getElementById("container").appendChild(box); 
box.classList.add("grid");
box.addEventListener("mouseover", func)
    function func() {
        box.setAttribute("style", "background-color: black;")
    }
}

// Create a 16x16 div grid

document.getElementById("size").addEventListener("click", gridSelect);

function gridSelect() {
    remove();
    let y = prompt("Select how many grids per side you want.");
    total = y * y;
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
