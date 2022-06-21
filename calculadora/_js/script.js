function calcularNumero (){
var telaAtual = document.form.displayCalc.value;
document.form.displayCalc.value = eval(telaAtual);

}

function registrarNumeros (acoes){

//pegamos o valor atual digitado na tela
var telaAtual = document.form.displayCalc.value;
//escrever na tela o valor atual (telaAtual) juntando  com o novo valor (acoes)
document.form.displayCalc.value = telaAtual + acoes;

}

function apagar (){

    var telaAtual = document.form.displayCalc.value;
    document.form.displayCalc.value = telaAtual.substring(0, telaAtual.length-1);

}

function allClear (){

    document.form.displayCalc.value = "" ;


}