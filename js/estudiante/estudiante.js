"use strict";

function Estudiante() {
	//Constructor de la clase
  this.estudiante={};
}

// Crea/Agrega los datos en el localStorage de acuerdo con el ID
Estudiante.prototype.setEst = function (id, name, score) {
  //Establece  usuario y lo almacena en localstorage si no existe.
  var max = localStorage.length, saved=false, done=false;
  //objeto usuario:
  this.estudiante = {
    id : id,
	  name : name,
    score : score
  };
  //Si localStorage está vacío almacena el registro de una vez.
    if (max==0) {
      try {
		  //Convierte el objeto a cadena de texto para ser almacenado en local storage:
        localStorage.setItem(this.usr.id, JSON.stringify(this.usr));
        done=true;
      } catch (e) {
        alert ("Error " + e);
      };
      } else {
          for (var i = 0; i < max; i++) {
			// Si el localstorage tiene al menos un registro
			// realiza una búsqueda para determinar si el registro ya existe
            var k = localStorage.key(i);
            if (k==this.estudiante.id) {
			      // Si el registro ya existe retorna "salvado" com verdadero
          saved=true;
        }
      };
      };
    if (saved==false) {
        try {
			//Convierte el objeto a cadena de texto para ser almacenado en local storage:
          localStorage.setItem(this.estudiante.id, JSON.stringify(this.estudiante));
		  // Si el registro no existe en el localStorage se guarda y retorna un "done" verdadero
          done=true;
        } catch (e) {
              alert ("Error " + e);
        };
    };
    return done;
};

// Busca los registros de estudiantes almacenados y los devuelve en un array
Estudiante.prototype.getEst = function () {
  var max = localStorage.length, estudiantes=[], estudiante={};

  for (var i = 0; i < max; i++) {
    var k = localStorage.key(i);

    estudiante = $.parseJSON(localStorage.getItem(k));
    estudiantes.push(estudiante);
  };
  return estudiantes;
};

// Busca la nota maxima y devuelve los ids con esa nota (todos los datos)
Estudiante.prototype.getMax = function () {
  //Se obtiene lista de usuarios almacenados en local storage
  var max = localStorage.length, estudiantes=[], estudiante={};
  var maximo = 0;

  for (var i = 0; i < max; i++) {
    var k = localStorage.key(i);
    estudiante = $.parseJSON(localStorage.getItem(k));

    if (i == 0){
      maximo = estudiante.score;
    }

    if (estudiante.score > maximo) {
      maximo = estudiante.score;
    }
  }

  if (maximo != 0){
    for (var i = 0; i < max; i++) {
      var k = localStorage.key(i);
      estudiante = $.parseJSON(localStorage.getItem(k));

      if (estudiante.score == maximo){
          estudiantes.push(estudiante);
      }
    }
  };

  return estudiantes;
};

// Busca la nota minima y devuelve los ids con esa nota (todos los datos)
Estudiante.prototype.getMin = function () {
  //Se obtiene lista de usuarios almacenados en local storage
  var max = localStorage.length, estudiantes=[], estudiante={};
  var minimo = 100;

  for (var i = 0; i < max; i++) {
    var k = localStorage.key(i);
    estudiante = $.parseJSON(localStorage.getItem(k));

    if (i == 0){
      minimo = estudiante.score;
    }
    if (estudiante.score < minimo) {
      minimo = estudiante.score;
    }
  }

  if (minimo != 100){
    for (var i = 0; i < max; i++) {
      var k = localStorage.key(i);
      estudiante = $.parseJSON(localStorage.getItem(k));

      if (estudiante.score == minimo){
          estudiantes.push(estudiante);
      }
    }
  };

  return estudiantes;
};

//Se obtiene el promedio de todas las notas de usuarios almacenados en local storage
Estudiante.prototype.getProm = function () {
  //Se obtiene lista de usuarios almacenados en local storage
  var max = localStorage.length, estudiante={};
  var total = 0;

  for (var i = 0; i < max; i++) {
    var k = localStorage.key(i);
    estudiante = $.parseJSON(localStorage.getItem(k));

    total = total + parseInt(estudiante.score);
  }

  promedio = total / max;

  return promedio;
};

// Elimina el dato de la tabla dependiendo del ID
Estudiante.prototype.delEst = function (id) {
	//Elimina el usuario por nombre del local storage
	var deleted = false;
  try {
    localStorage.removeItem(id);
	deleted=true;
  } catch (e) {
      alert("Error " + e );
  }
	return deleted;
};

// Devuelve el estado del localStorage
Estudiante.prototype.isEmpty = function () {
	// Verifica si el local storage está vacío:
	var emp = null;
	if (localStorage.length==0) {
		emp = true;
	} else {
		emp = false;
	}
	return emp
};
