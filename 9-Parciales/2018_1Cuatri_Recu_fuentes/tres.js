function mostrar()
{
	var compra, desc, iva, total;

	compra= elPrecioFinal.value;  

	compra= parseInt(compra);
	desc= parseInt(desc);
	iva= parseInt(iva);
	total= parseInt(total);

	desc= (compra-(compra/1.10));
	iva= ((desc*1.25)-desc);
	total= ((compra-desc)+iva);

	alert("Usted realizo una compra de $" +compra+ ", la cual tuvo un descuento del 10% ($" +desc+ ") y si le sumamos el IVA ($" +iva+ "), nos queda un total de: $" +total);

}
