
 function enviarFormulario()
 {
 
  var nome = document.formContato.nome.value;
  var fone = document.formContato.fone.value;
  var assunto = document.formContato.assunto.value;
  var mensagem = document.formContato.mensagem.value;

  if(nome =="" || fone =="" || assunto =="" || mensagem =="") {
    alert ("campos nao podem ser vazios");
    return;
  }
       alert ("Formulario enviado com sucesso!");

       document.formContato.nome.value = "";
   document.formContato.fone.value = "";
   document.formContato.assunto.value = "";
   document.formContato.mensagem.value = "";
   }
 