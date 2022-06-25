
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

function testeSwitch() {
    var data_hora = new Date();
    var dia_semana = data_hora.getDay();
    switch(747)
    {
        case 0:   alert("domingo de descanso merecido.");
                  break;
        case 5:   alert("Obaaa, sexta-feira.");
                  break;
        case 6:   alert("Maravilha, sabadão");
                  break;
        default:  alert("semana longaaa.");
    }
}