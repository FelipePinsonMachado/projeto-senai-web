function ocultarexibirmenu (nome) {

    var menu = document.getElementById("menu-header");
    var icone = document.getElementById("icone-menu");

if (getComputedStyle(menu).display == 'none') {

        menu.style.display = "flex";
        icone.classList.remove("fa-align-justify");
        icone.classList.add("fa-times");

  } else {

        menu.style.display = "none";
        icone.classList.remove("fa-times");
        icone.classList.add("fa-align-justify");
 }
}