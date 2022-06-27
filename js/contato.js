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
    alert(dadosNome+dadosFone+dadosAsuntos+dadosMensagem);
 }