 /*
Romero Melany Ingrid DIV E
E/S ej4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declaro variable
	var nombreIngresado

	//guardo el dato, como en el ej 2
	nombreIngresado = prompt("ingrese su nombre");

	//asigno nombre a la caja de texto
	//Uniendo el ej2 y ej3, defino el Id desde la variable, que esta determinada por el promt
	//document.getElementById("txtIdNombre").value = nombreIngresado;
	txtIdNombre.value = nombreIngresado;



	
}

