/**
 *
 * Envia o formulario de contato,
 * Exibe uma mensagem na tela para o cliente
 *
 */
 function enviarFormulario()
 {
    

    var nome = document.formContato.nome.value;

    var telefone = document.formContato.fone.value;

    var assunto = document.formContato.assunto.value;

    var mensagem = document.formContato.mensagem.value;

     
    if (nome=="" ||assunto=="" ||telefone=="" || mensagem =="" ){

        alert('Por favor, preencha os campos obrigatorios');
        return;
      }
   

   alert('formulario enviado com sucesso'); document.formContato.nome.value = "";
   document.formContato.fone.value = "";
   document.formContato.assunto.value = "";
   document.formContato.mensagem.value ="";
 }