var estudiante;


$(function () {
  estudiante = new Estudiante();
	console.log("Usuario 1 creado: " + estudiante.setEst("345", "Ernesto Pérez Sandoval", 78));
	console.log("Usuario 2 creado: " + estudiante.setEst("456", "Enrique López Villalobos", 80));
	console.log("Usuario 3 creado: " + estudiante.setEst("987", "Alejandra Piva Otárola", 60));
  console.log("Usuario 3 creado: " + estudiante.setEst("654", "Jaime Perez Rojas", 95));
	console.log("Obteniendo el listado de registros en el LocalStorage: ");
  console.log(estudiante.getEst());
  console.log("Obteniendo el listado de registros con nota mas alta: ");
  console.log(estudiante.getMax());
  console.log("Obteniendo el listado de registros con nota mas baja: ");
  console.log(estudiante.getMin());
	console.log("Eliminando usuario con el id 345: " + estudiante.delEst("345"));
  console.log("Eliminando usuario con el id 654: " + estudiante.delEst("654"));
  console.log ("Obteniendo el listado después de eliminar registros");
	console.log(estudiante.getEst());

  // Prueba de Rendimiento
  for (var i = 0; i < 100; i++) {
    estudiante.setEst(i, "Usuario de Prueba" + i, i);
  }

  console.log ("Obteniendo el listado de registros en el LocalStorage: ");
  console.log(estudiante.getEst());
});
