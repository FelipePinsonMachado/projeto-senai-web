/**
 *
 * Envia o formulario de contato,
 * Exibe uma mensagem na tela para o cliente
 *
 */
 function enviarFormulario()
 {
    var dadosCliente
    alert("funciona")

 
 }
 function dadosReunidos() {
    var dadosNome=document.formContato.nome.value;
    var dadosFone=document.formContato.fone.value;
    var dadosAsuntos=document.formContato.assunto.value;
    var dadosMensagem=document.formContato.mensagem.value; 
        if(dadosNome ==""||dadosFone ==""||dadosAsuntos ==""||dadosMensagem==""){
            alert("O FORMULARIO PRECISA ESTAR PREENCHIDO")
            return;              
    }
            alert("FORMULARIO ENVIADO COM SUCESSO");         
    document.formContato.nome.value="";
    document.formContato.fone.value="";
    document.formContato.assunto.value="";
    document.formContato.mensagem.value="";            
}
     


      


 