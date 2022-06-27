/**
 *
 * Envia o formulario de contato,
 * Exibe uma mensagem na tela para o cliente
 *
 */
 function enviarFormulario()
 {

    var nomeCliente = document.formContato.nome.value;
    var telefoneCliente = document.formContato.fone.value;
    var assuntoCliente = document.formContato.assunto.value;
    var mensagemCliente = document.formContato.mensagem.value;
    alert(nomeCliente);
    alert(telefoneCliente);
    alert(assuntoCliente);
    alert(mensagemCliente);

 }