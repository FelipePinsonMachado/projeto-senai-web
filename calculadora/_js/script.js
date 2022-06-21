function CalcularNumero(){
    var TelaAtual = document.form.displayCalc.value;
    document.form.displayCalc.value = eval (TelaAtual);
    

}

function RegistrarNumeros(acoes){
   
    var TelaAtual = document.form.displayCalc.value;
    document.form.displayCalc.value = TelaAtual + acoes;
    

}

function Apagar(){
    var TelaAtual = document.form.displayCalc.value;
    document.form.displayCalc.value = TelaAtual.substring (0, TelaAtual.length -1);
    

}

function AllClear(){
    //selecionando a tela
    document.form.displayCalc.value = "";

}