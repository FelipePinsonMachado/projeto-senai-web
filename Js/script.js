function ocultarexibirmenu () {

    var menu = document.getElementById("menu-header");
    var icone = document.getElementById("icone-menu");

if (getComputedStyle(menu).display == 'none') {
        //MOSTRA NO MOBILE
        menu.style.display = "flex";
        icone.classList.remove("fa-align-justify");
        icone.classList.add("fa-times");

  } else {
        //OCULTA NO MOBILE
        menu.removeAttribute('style');
        icone.classList.remove("fa-times");
        icone.classList.add("fa-align-justify");
 }
}