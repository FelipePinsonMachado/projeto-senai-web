
 function enviarFormulario()
 {
     
    var nome = document.formContato.nome.value;
    var assunto = document.formContato.assunto.value;
    var mensagem = document.formContato.mensagem.value;
    var fone = document.formContato.fone.value;

    if(nome =="" || assunto =="" || fone =="" || mensagem =="") {

       alert ("campos nao podem ser vazios")
        return;
    }
    alert ('Formulario enviado com sucesso!')

    document.formContato.nome.value = "";
    document.formContato.assunto.value = "";
    document.formContato.mensagem.value = "";
    document.formContato.fone.value = "";
 }

 
