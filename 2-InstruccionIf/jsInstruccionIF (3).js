function mostrar()
{
//tomo la edad  
 var edad1;
 var mensaje;

 edad1= edad.value;

 edad1= parseInt(edad1);

 if(edad1>"17")
 {
 	mensaje= "Usted es mayor de edad!";
 }
 else
 {
 	mensaje= "Usted es menor de edad!";
 }

alert(mensaje);

}//FIN DE LA FUNCIÓN