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

/**
 * @param distMenu (posição que o menu ira aparecer na tela)
 * @param distBody (posição de alinhamento das coisas com o corpo da pagina, o que ira fazer com que todo o conteudo ande junto com o menu.)
 */

 function exibirOcultarMenuLateral(distMenu, distBody) {
    $('.menu').animate({
        left: distMenu + "px"
    }, 200);
    $('body').animate({
        left: distBody + "px"
    }, 200);
}

