/*
Romero Melany Ingrid DIV E
E/S EJ5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//declaro variable
	var nombre;
	var edad;

	//guardar los datos en las variables

	//nombre = txtIdNombre.value;
	//edad = txtIdEdad.value;
	nombre = document.getElementById("txtIdNombre").value;
	edad= document.getElementById("txtIdEdad").value;

	//muestro por alert

	alert("usted se llama " + nombre + " su edad es " + edad + " años");
}

//txtIdNombre
//txtIdEdad
