function ocultarmostrarmenu (nome) {
    var menu   =document.getElementById("menu-header");
    var icone  =document.getElementById("icone-menu");
    if (getComputedStyle (menu).display == 'none') {
        menu.style.display = "flex";
        icone.classList.remove ("fa-bars");
        icone.classList.add ("fa-times");
    }else {
        menu.removeAttribute ('style');
        icone.classList.remove ("fa-times");
        icone.classList.add ("fa-bars");
    }
}