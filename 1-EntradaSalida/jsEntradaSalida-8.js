/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var divisor;
	var dividendo;
	var cociente;
	var resto;

	divisor=numeroDivisor.value;
	dividendo=numeroDividendo.value;

	divisor=parseInt(divisor);
	dividendo=parseInt(dividendo);

	cociente=divisor/dividendo;
	resto=divisor%dividendo;

	alert("El cociente es: "+cociente+" y el resto seria: "+resto);

}
