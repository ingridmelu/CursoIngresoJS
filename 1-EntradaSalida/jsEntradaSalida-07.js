/*
Romero Melany Ingrid
E/S ej7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	//defino variable
	var NumeroUn
	var NumeroDos
var resultado
//guardo los datos en la variable
NumeroUno = document.getElementById("txtIdNumeroUno").value;
NumeroDos = document.getElementById("txtIdNumeroDos").value;

//paso la variable a numero
NumeroUno = parseInt(NumeroUno);
	NumeroDos = parseInt(NumeroDos);
//muestro resultado
	resultado = NumeroUno + NumeroDos;
	alert("la suma es" resultado);

		
}

function restar()
{
	var NumeroUn
	var NumeroDos
var resultado
//guardo los datos en la variable
NumeroUno = document.getElementById("txtIdNumeroUno").value;
NumeroDos = document.getElementById("txtIdNumeroDos").value;

//paso la variable a numero
NumeroUno = parseInt(NumeroUno);
	NumeroDos = parseInt(NumeroDos);
//muestro resultado
	resultado = NumeroUno - NumeroDos;
	alert("la resta es" resultado);

	
}

function multiplicar()
{ var NumeroUn
	var NumeroDos
var resultado
//guardo los datos en la variable
NumeroUno = document.getElementById("txtIdNumeroUno").value;
NumeroDos = document.getElementById("txtIdNumeroDos").value;

//paso la variable a numero
NumeroUno = parseInt(NumeroUno);
	NumeroDos = parseInt(NumeroDos);
//muestro resultado
	resultado = NumeroUno * NumeroDos;
	alert("la multiplicacion es" resultado);

	
}

function dividir()
{
	var NumeroUn
	var NumeroDos
var resultado
//guardo los datos en la variable
NumeroUno = document.getElementById("txtIdNumeroUno").value;
NumeroDos = document.getElementById("txtIdNumeroDos").value;

//paso la variable a numero
NumeroUno = parseInt(NumeroUno);
	NumeroDos = parseInt(NumeroDos);
//muestro resultado
	resultado = NumeroUno / NumeroDos;
	alert(" la division es" resultado);

}

