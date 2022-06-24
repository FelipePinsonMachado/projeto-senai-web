function testeFor () 
{
    for (cont=10; cont >= 0; cont--) {
        var mostrarcontagem = document.getElementById ("mostrar-contagem");
        mostrarcontagem.innerHTML += "numero " + cont + "<br>";
    }
}

function testWhile () 
{
    let cont=0;
    while (cont <10)
    {
        console.log ("numero:" +cont);
        cont=cont +1;
        var mostrarcontagemwhile = document.getElementById ("mostrar-contagem-while");
        mostrarcontagemwhile.innerHTML += "numero " + cont + "<br>";
    }

}