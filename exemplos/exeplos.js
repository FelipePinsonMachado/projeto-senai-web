function testeFor () { 
    let cont; 
    for (cont = 10; cont >= 1; cont--) {
        var mostrarContagem = document.getElementById("mostrarContagem");
        mostrarContagem.innerHTML += "Numero " + cont + "<br>";

    }
}
