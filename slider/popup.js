let btnAbrirPopup = document.getElementById("lugares");
let overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");
let btnCerrarPopup = document.getElementById("btn-cerrar-popup");

btnAbrirPopup.addEventListener("click", function(){
    overlay.classList.add("active");
});

btnCerrarPopup.addEventListener("click", function(){
    overlay.classList.remove("active");
});
