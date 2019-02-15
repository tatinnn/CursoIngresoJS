function mostrar()
{
 var persona1;
 var persona2;
 var persona3;
 var propina1;
 var propina2;
 var propina3;
 var iva1;
 var iva2;
 var iva3;
 var total1;
 var total2;
 var total3;
 var totaltotal;

 persona1= parseInt(persona1);
 persona2= parseInt(persona2);
 persona3= parseInt(persona3);
 propina1= parseInt(propina1);
 propina2= parseInt(propina2);
 propina3= parseInt(propina3);
 iva1= parseInt(iva1);
 iva2= parseInt(iva2);
 iva3= parseInt(iva3);
 

 alert("Usted pidio una mesa para 3.");
 
 persona1= prompt("Ingrese cuanto gasto la 1ra persona");
 persona2= prompt("Ingrese cuanto gasto la 2da persona");
 persona3= prompt("Ingrese cuanto gasto la 3ra persona");

 propina1= persona1*0.1;
 propina2= persona2*0.1;
 propina3= persona3*0.1;
 iva1= persona1*0.21;
 iva2= persona2*0.21;
 iva3= persona3*0.21;

 total1= parseInt(total1);
 total2= parseInt(total2);
 total3= parseInt(total3);
 totaltotal= parseInt(totaltotal);
 
 total1= (persona1+propina1+iva1);
 total2= (persona2+propina2+iva2);
 total3= (persona3+propina3+iva3);
 totaltotal= (total1+total2+total3);

 alert("los 3 comenzales consumieron respectivamente $" +persona1+
 " (+ $"+ propina1 +" de propina y el 21% iva = $" +total1+ "), $" 
+persona2+ " (+ $"+ propina2 +" de propina y el 21% iva = $" +total2+ ") y por ultimo $" 
+persona3+ " (+ $"+ propina3 +" de propina y el 21% iva = $" +total3+ "), dandonos un total de : $" +totaltotal+".")

} 