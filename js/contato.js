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
     alert (nome);
     alert (telefone);
     alert (assunto);
     alert (mensagem);
     

 }