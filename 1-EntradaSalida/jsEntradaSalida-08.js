/*
Romero melany ingrid
E/S ej8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declarar variable
	var Dividendo;
	var Divisor;
	var Resto;

	//traemos los valores por id
	Dividiendo = document.getElementById("txtIdNumeroDividendo").value;
	Divisor = document.getElementById("txtIdNumeroDivisor").value;
    
    //los transformo a entero
    Dividiendo = parseInt(Dividiendo);
    Divisor = parseInt(	Divisor);

    Resto = Dividiendo % Divisor;

    alert(" es resto es " + Resto);


}
