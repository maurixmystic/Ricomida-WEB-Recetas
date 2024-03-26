$(function () {
  //Iniciar el Tooltip
  $('[data-toggle="tooltip"]').tooltip()

  //Alerta de boton de enviar
  $('.btn-mail').click(function(){
    alert("El correo fue enviado correctamente...");
  });

  //Alerta de boton favoritos
  $('.btn-fav').click(function(){
  alert("Agregado a Favoritos...");
  });


  //Cambiar de color de los titulos
  $('body').on('dblclick','.titulo', function(){
    $(this).css("color","red");
  });

  //Esconder y mostrar el texto de las tarjetas
  $('.titulos').click(function(){
    $('.cuerpo').toggle();
  });
});


