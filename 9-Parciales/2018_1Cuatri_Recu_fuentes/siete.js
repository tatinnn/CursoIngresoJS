function mostrar()
{
	var combustible;
	var velocidad;
	var velocidadMenor= 0;
	var combustibleVMenor;
	var velocidadMaxima= 0;
	var velocidadesTotales;
	var contador= 1;
	var promVelocidades;
	var velocidad100km=0;

	velocidad100km= parseInt(velocidad100km);
	velocidad= parseInt(velocidad);
	velocidadMenor= parseInt(velocidadMenor);
	velocidadMaxima= parseInt(velocidadMaxima);
	velocidadesTotales= parseInt(velocidadesTotales);
	contador= parseInt(contador);
	promVelocidades= parseInt(promVelocidades);


	while(contador < 5)
		{
			combustible= prompt("Ingrese su tipo de combustible para el vehiculo nº" +contador+ ": 1- Solido, 2-Liquido");
			
			while(combustible!="solido" && combustible!="liquido")
			{
				combustible= prompt("Error, debe ingresar opcion 1- Solido u 2- Liquido");
			}
			
			if(combustible = "solido")
			{
				velocidad= prompt("Ahora ingrese su velocidad en km/h:");

				if(velocidad > velocidadMaxima)
				{
					velocidadMaxima= velocidad;
				}

			}
			else
			{
				velocidad= prompt("Ahora ingrese su velocidad en km/h:");
				if(velocidad>100)
				{
					velocidad100km= velocidad100km + 1;
				}
			}

			if(velocidadMenor < velocidad)
			{
				velocidadMenor= velocidad;
				combustibleVMenor= combustible;
			}

			velocidadesTotales= velocidadesTotales+velocidad;
			contador= contador+1;
		}		

	promVelocidades= velocidadesTotales / 5;
	
	alert("El primedio de las velocidades totales es: "+promVelocidades);
	alert("La menor velocidad fue: "+velocidadMenor+" y su tipo de combustible fue: "+combustibleVMenor);
	alert("La cantidad de vehuculos cuya velocidad maxima supero los 100km/h con combustible liquido fueron: "+velocidad100km);
	alert("La mayor velocidad bajo combustible solido fue: "+velocidadMaxima);
		

}		

