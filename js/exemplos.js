
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

function testeswitch(){

    let data_hora = new Date();
    let dia_semana = data_hora.getDay();
    switch(10)
    {
        case 0:  alert("Domingo de descanso merecido.");
                 break;
        case 5:  alert("Obaaa, sexta-feira.");
                 break;
        case 6:  alert("Maravilha, sabadão!!.");
                 break;
        default: alert("Semana longaaaa.");                

    }

        

}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              