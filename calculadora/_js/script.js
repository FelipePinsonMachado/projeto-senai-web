function calcularNumero() { 
    //se usa o eval para haver uma soma entre o tela atual e ogit 
    var telaAtual = document.form.displayCalc.value;
    document.form.displayCalc.value = eval (telaAtual)
}


function registrarNumero(acoes) {
    //pegamos o valor digitado na tela
var telaAtual = document.form.displayCalc.value;
    //escrever na tela o valor do atual (telaAtual) + o novo valor (acoes)
document.form.displayCalc.value = telaAtual + acoes; 
    
}

function apagar() {
    //apagar os numeros de 1 em 1 de tras pra frente
    var telaAtual = document.form.displayCalc.value;
    document.form.displayCalc.value = telaAtual.substring (0, telaAtual.length -1);

   
  

}
 function allclear() {
    // apagar toods os numeros
    document.form.displayCalc.value = "";

 }