// Create a 16x16 div grid

for (i=0;i<256;i++) {
let box = document.createElement("div");
document.getElementById("container").appendChild(box); 
box.classList.add("grid");
}
