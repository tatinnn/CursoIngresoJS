
function mostrar()
{
	var mascota1, mascota2, pesom1, pesom2, pesototal;

	mascota1= prompt("Ingrese el nombre de una de sus mascotas");
	pesom1= prompt("Ahora, ingrese el peso de "+mascota1);
	mascota2= prompt("Ingrese el nombre de su otra mascota");
	pesom2= prompt("Ahora, ingrese el peso de "+mascota2);

	pesom1=parseInt(pesom1);
	pesom2=parseInt(pesom2);
	pesototal=parseInt(pesototal);

		
	pesototal= pesom1+pesom2;
	

	alert("El peso combinado de " +mascota1+ " y " +mascota2+ "es: " +pesototal);

}
