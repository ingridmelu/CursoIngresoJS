/*
Romero Melany Ingrid DIV E
E/S EJ3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declaro variable
	var nombreIngresado;

	//Guardo nombre 
	//nombreIngresado = document.getElementById("txtIdNombre").value;
	//se define una variable, a diferencia del ej 2, el texto no se ingresa en una ventana emergente, si no en un campo ya establecido
	nombreIngresado = txtIdNombre.value;

	//muestro el nombre por alert
	alert("Su nombre es " + nombreIngresado);
	

}
//txtIdNombre

/*

ENTRADA:
-promt
-id

proceso:

salida:
-alert
*/


