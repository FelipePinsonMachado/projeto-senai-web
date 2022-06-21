function calcularNumero () {
    //calcular o numero, puxado do registrar numero
    var telaAtual = document.form.displayCalc.value;
    document.form.displayCalc.value = eval(telaAtual);
}
function registrarNumero (action) {
    //pegamos o valor digitado na tela
    var telaAtual = document.form.displayCalc.value;
    document.form.displayCalc.value= telaAtual + action; 
}
function apagar () {
    //apagar os numeros de 1 em 1 de tras pra frente
    var telaAtual = document.form.displayCalc.value;
    document.form.displayCalc.value = telaAtual.substring (0,telaAtual.length -1);


}

function allClear () {
    //apagar todos os numeros
    document.form.displayCalc.value = "";

}