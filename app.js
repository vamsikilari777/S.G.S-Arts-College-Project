let hamburgerEl =document.getElementById("hamburgersymbol");
let closebuttonEl = document.getElementById("close-button-symbol");
let sideberContainerEl = document.getElementById("sidebar-container-element");
console.log(hamburgerEl);

function fun(){

    sideberContainerEl.classList.add("show-sidebar");
    console.log("yes i clicked by you");
}
function funclose(){
    sideberContainerEl.classList.remove("show-sidebar");
    console.log("yes i am close");
}
