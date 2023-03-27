// Create a 16x16 div grid

function create() {
let box = document.createElement("div");
document.getElementById("container").appendChild(box); 
box.classList.add("grid");
box.addEventListener("mouseover", func)
    function func() {
        box.setAttribute("style", "background-color: black;")
    }
}

for (i=0;i<256;i++) {
    create(); 
}