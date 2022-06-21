function calcularNumero () { 

    var telaAtual = document.form.displayCalc.value;
    document.form.displayCalc.value = eval(telaAtual);

}
function registrarNumeros (acoes) {

    //PEGAMOS O VALOR ATUAL DIGITADO NA TELA
    var telaAtual = document.form.displayCalc.value;
    //ESCREVER NA TELA O VALOR ATUAL (telaAtual) JUTANTO COM O NOVO VALOR (ACOES)
    document.form.displayCalc.value = telaAtual + acoes;

}
function apagar () {

    var telaAtual = document.form.displayCalc.value;
    document.form.displayCalc.value = telaAtual.substring(0, telaAtual.length -1)

}
function allClear () {
    document.form.displayCalc.value = "";
}