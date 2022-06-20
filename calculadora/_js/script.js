function calcularNumero () {}
function registrarNumeros (acoes) 
{
    /* pegamos o valor atual digitando na tela */
     var telaAtual = document.form.displayCalc.value;
     /*escrever na tela o valor atual (telaAtual) + o novo valor (acoes) */
     document.form.displayCalc.value = telaAtual + acoes;    
}
function clear () {

}
function allclear () {}