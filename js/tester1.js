var estudiante;

$(function () {
  estudiante = new Estudiante();
	console.log("Usuario 1 creado: " + estudiante.setEst("345", "Ernesto Pérez Sandoval", 78));
	console.log("Usuario 2 creado: " + estudiante.setEst("456", "Enrique López Villalobos", 80));
	console.log("Usuario 3 creado: " + estudiante.setEst("987", "Alejandra Piva Otárola", 60));
	console.log ("Obteniendo el listado de registros en el LocalStorage: ");
	console.log(estudiante.getEst());
	console.log("Eliminando usuario con el id 345: " + estudiante.delEst("345"));
  console.log("Eliminando usuario con el id 345: " + estudiante.delEst("78"));
  console.log ("Obteniendo el listado después de eliminar el registro 345");
	console.log(estudiante.getEst());
});
