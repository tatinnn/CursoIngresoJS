/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueld;
	var resultad;
	var aumento;

	sueld=parseInt(sueld);
	resultad=parseInt(resultad);
	aumento=parseInt(aumento);

	sueld=sueldo.value;

    aumento=sueld*10/100;

	resultad=aumento+sueld;

	resultado.value=resultad;

	
}
