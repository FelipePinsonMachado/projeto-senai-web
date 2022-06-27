/**
 *
 * Envia o formulario de contato,
 * Exibe uma mensagem na tela para o cliente
 *
 */
 function enviarFormulario()
 {
     var nome= document.formContato.nome.value;
        alert (nome);

    var fone= document.formContato.fone.value;
        alert (fone);

    var assunto= document.formContato.assunto.value;
        alert (assunto);

    var mensagem= document.formContato.mensagem.value;
        alert (mensagem);
 }