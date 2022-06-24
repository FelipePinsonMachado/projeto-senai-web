
function testeFor (){
    let cont;
    for(cont=0; cont <= 10; cont++)
    {
        var mostrarContagem = document.getElementById("mostrar-contagem-for");
        mostrarContagem.innerHTML += `Numero` + cont + "<br>";

    }

}   

function testewhile (){
    var cont = 11;
    while(cont > 0)
    {
        var mostrarNumeros = document.getElementById("mostrar-contagem-while");
        mostrarNumeros.innerHTML += `Numero` + cont + "<br>"
        cont--;    
    }
}