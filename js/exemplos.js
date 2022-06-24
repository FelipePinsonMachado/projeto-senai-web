
function testeFor (){
      
    let cont;
    for (cont = 10; cont >=0;cont--)
    {
        var mostrarcontagem = document.getElementById("mostrar-contagem");
        mostrarcontagem.innerHTML += "numero" + cont + "<br>";       
    }
    
    
}

function testewhile(){

    let cont = 0;
    while(cont < 10)

    {
        var mostrarcontagemwhile = document.getElementById("mostrar-contagem-while");
        mostrarcontagemwhile.innerHTML += "numero" + cont + "<br>";
        cont ++;
    }

}


