//Define la funcion Vista
function Vista() {
}

// Manda el mensaje de que los datos fueron creados correctamente
Vista.prototype.mostrarGuardadoOk = function (cont) {
  $(cont).text("Registro agregado satisfactoriamente");
  $(cont).fadeIn();
};

// Oculta el contenedor
Vista.prototype.ocultarContenedor = function (cont) {
  $(cont).fadeOut();
};

// Esconde el contenido
Vista.prototype.establecerInvisible = function (cont) {
  $(cont).css("display", "none");
};

// Toma los datos de los estudiantes y los mueve a una tabla para desplegarlos en
// la pantalla
Vista.prototype.mostrarArray = function (array, cont) {
  // Define las variables que va a usar
  var  limite = array.length, fila ="",
  tabla = $("<table> <tr>" +
  "<th>ID</th>" +
  "<th>Nombre</th>" +
  "<th>Nota</th>" +
  "<th>Eliminar</th>" +
  "</tr></table>");

  //Definición de las propiedades del objeto
  $(tabla).addClass("table table-striped");
  $(tabla).attr("id","tablaRegistros");

  for (var i = 0; i < limite; i++) {
  //Creación de las filas de forma dinánmica
    fila = $("<tr>"+
      "<td>" + array[i].id + "</td>" +
      "<td>" + array[i].name + "</td>" +
      "<td>" + array[i].score + "</td>" +
      "<td><img id=" + array[i].id + " src='images/trashcan.jpg' class='btnDelete'/></td>" +
        +"</tr>" );

     // Una vez creada la fila se agrega en la tabla
     $(tabla).append(fila);
  };

  //Imprime en el HTML cada párrafo que contiene cada uno de los registros
  $(cont).append(tabla);
  $(".btnDelete").bind("click", elimina);
};

// Limpia el contenido del modal
Vista.prototype.limpiarContModal = function (modal, cont) {
    $(modal).on('hidden.bs.modal', function (e) {
      // Limpia el contenedor
      $(cont).empty();
  })
};

// Limpia el contenido de la pantalla
Vista.prototype.limpiarCont = function (cont) {
        $(cont).empty();
};

// Valida si algun campo de la pantalla para cargar a estudiantes esta vacio
Vista.prototype.validarVacios = function (id, nombre, nota) {
      var vacio = true;
        if (id != "" && nombre != "" && nota != "") {
          vacio=false;
        }
        return vacio;
};
