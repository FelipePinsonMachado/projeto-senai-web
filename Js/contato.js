
 function enviarFormulario(){

    var nome = document.formContato.nome.value;
    document.formContato.nome.value = "";
    
    var assunto = document.formContato.assunto.value;
    document.formContato.assunto.value = "";

    var fone = document.formContato.fone.value;
    document.formContato.fone.value = "";

    var mensagem = document.formContato.mensagem.value;
    document.formContato.mensagem.value = "";

    if(nome =="" || assunto =="" || fone =="" || mensagem=="" ){
        alert("campos nao pode ser vazio");
        return;
    }
    alert("Formulario enviado com sucesso!")
    
 }