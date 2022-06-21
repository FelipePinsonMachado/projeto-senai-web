function calcularNumero () 
{
    //para calcular o resultado da minha conta 
    var telaAtual = document.form.displayCalc.value;
    document.form.displayCalc.value = eval(telaAtual);
}

function registrarNumeros (acoes) 
{
    // pegamos o valor atual digitando na tela 
     var telaAtual = document.form.displayCalc.value;
     //escrever na tela o valor atual (telaAtual) + o novo valor (acoes)
     document.form.displayCalc.value = telaAtual + acoes;    
}
function apagar () 
{
    // para apagar
    var telaAtual = document.form.displayCalc.value;
    document.form.displayCalc.value = telaAtual.substring (0, telaAtual.length -1);
}

function allclear () 
{
    //para apagar tudo 
    document.form.displayCalc.value = "";
}