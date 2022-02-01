/*
Romero melany ingrid
E/S ej6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaro variable
	var NumeroUno;
	var NumeroDos;
	var resultado;

	//guardo los datos en la variable"
	//los tomo por ID
	NumeroUno = document.getElementById("txtIdNumeroUno").value;
	NumeroDos = document.getElementById("txtIdNumeroDos").value;

	//paso la variable a numero con parseInt
	NumeroUno = parseInt(NumeroUno);
	NumeroDos = parseInt(NumeroDos);

    //muestro resultado
	resultado = NumeroUno + NumeroDos;
    
    //alert resultado
    //documente.write(resultado);
	alert(resultado);

}

/*

ENTRADA:
-promt
-id

proceso:
-parseInt

salida:
-alert
-id

*/