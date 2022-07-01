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