$(document).ready(function() {
      $(function() {
        $(".dra").draggable();
      });


  $(".fa.fa-times").click(function() { //evento "clicar botão excluir": solicita a exclusão da noticia

    // var url_remove = $(this).parent().attr('href') + "/" + $(this).parent().attr('id');
    var url_remove    = window.location.origin+"/candidate";
    var remove_status = window.confirm("Você realmente deseja excluir a notícia?"); // segunda chance

    if (remove_status) { // caso usuário confirme a remoção da notícia
      $.ajax({
        method: "DELETE",
        url: url_remove
      }).complete(function() {
        // location.reload(); // atualiza a página
      });
    }
  })
  });
