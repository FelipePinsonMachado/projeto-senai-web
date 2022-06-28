/**
 *
 * Envia o formulario de contato,
 * Exibe uma mensagem na tela para o cliente
 *
 */
 function enviarFormulario(){
 

    var nomeCliente = document.formContato.nome.value;
    var telefoneCliente = document.formContato.fone.value;
    var assuntoCliente = document.formContato.assunto.value;
    var mensagemCliente = document.formContato.mensagem.value;

    
    

    if (nomeCliente == "" || assuntoCliente == "" || telefoneCliente == "" ||  mensagemCliente == "")  {
      alert("O FORMULARIO PRECISA SER PREENCHIDO")
   return;
   }
    
     alert("FORMULARIO ENVIADO COM SUCESSO")
    
 

      document.formContato.nome.value="";
      document.formContato.fone.value="";
      document.formContato.assunto.value="";
      document.formContato.mensagem.value="";
  
   
     

       
        






    
 }