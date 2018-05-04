// Define las variables que se van a utilizar en las funciones

var est = new Estudiante,
v = new Vista ();

// Logica principal de la aplicacion

$(document).ready(function () {
  //Manejador de eventos
  $("#btnAgregar").click(guardar);
  $("#btnMostrar").click(mostrar);
  $("#btnMaximo").click(maximo);
  $("#btnMinimo").click(minimo);
  $("#btnPromedio").click(promedio);
  $("#btnElimina").click(elimina);

  //Se ocultan los alert
    v.establecerInvisible($("#contMensaje"));
})

// Toma los datos de la pantalla y los pasa a la funcion que lo
// guarda en el local storage
function guardar() {
  // Inicializa las variables locales con los datos digitados en la pantalla
  var id = $("#txtId").val();
  var nombre = $("#txtNombre").val();
  var nota = $("#txtNota").val();

// Valida que los datos hayan sido digitados y llama a la funcion que graba
  if (v.validarVacios(id, nombre, nota) == false) {
      if (est.setEst(id, nombre, nota)) {
          v.mostrarGuardadoOk($("#contMensaje"));
          $("#txtId").val("");
          $("#txtNombre").val("");
          $("#txtNota").val("");
          setTimeout(function () {
              v.ocultarContenedor("#contMensaje");
          }, 1000);
      }
    } else {
    // Si algun dato viene vacio envia una alerta para que se corrija
      window.alert ("Debe completar todos los campos");
    }
}

// Funcion que llama el despliegue de los datos en la pantalla
function mostrar() {
  v.mostrarArray(est.getEst(), $("#visor"))
  $("#modalRegistros").modal();
  v.limpiarContModal($("#modalRegistros"), $("#visor"));
}

// Llama a la funcion que calcula la nota maxima de los estudiantes y los
// despliega en pantalla
function maximo() {
  v.mostrarArray(est.getMax(), $("#visor"))
  $("#modalRegistros").modal();
  v.limpiarContModal($("#modalRegistros"), $("#visor"));
}

// Llama a la funcion que calcula la nota minima de los estudiantes y los
// despliega en pantalla
function minimo() {
  v.mostrarArray(est.getMin(), $("#visor"))
  $("#modalRegistros").modal();
  v.limpiarContModal($("#modalRegistros"), $("#visor"));
}

// Llama a la funcion que calcula el promedio de todas las notas y las
// despliega en pantalla
function promedio() {
  var nota = est.getProm();

  alert ("El promedio de notas es: " + nota);
}

// Llama a la funcion que elimina el dato seleccionado por el usuario
function elimina(id) {
  alert ("Entro a eliminar");
  v.mostrarArray(est.delEst(".btnDelete"), $("#visor"))
  $("#modalRegistros").modal();
  v.limpiarContModal($("#modalRegistros"), $("#visor"));
}
