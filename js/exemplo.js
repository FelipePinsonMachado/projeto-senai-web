

function testeFor() {
    let cont;
    for(cont=10; cont >0; cont--){
     var mostrarContagem = document.getElementById("MostrarContagemfor");
     mostrarContagem.innerHTML += "Numero" + cont + "<br>";    
    }  
} 
/** 
function somar (){

var numero1=document.numeros.numeroinicial
var numero2=document.numeros.numerofinal



    
}**/
 function testWhile() {
     let cont=20;
     while(cont>5) {
         console.log("numero"+cont);
         cont-=5;
     }

 }
 function mostrarSwitch() {
     let data_hora = new Date();
     let dia_semana=data_hora.getDay();     
     switch(dia_semana)
     {
        case 0:
             alert("Domingo");
            break;
        case 5 :alert("sexta-feira");      
            break;   
        case 6: alert("sabado");
            break;
        default: alert("semana longa");
        case 7: alert("segunda");
        break;
}
}
    
