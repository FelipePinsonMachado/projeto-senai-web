function CalcularNumero (){}



function RegistrarNumeros(acoes){

   var telaAtual = document.form.displayCalc.value;
   numero = document.form.displayCalc.value = telaAtual + acoes;

}

function calcularnumero(){

    var telaAtual = document.form.displayCalc.value;
    document.form.displayCalc.value = eval(telaAtual);         

}

function apagar(){

    var telaAtual = document.form.displayCalc.value;
    document.form.displayCalc.value = telaAtual.substring(0, telaAtual.length-1);
 
}


function allclear(){

    document.form.displayCalc.value = "";

}