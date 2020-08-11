/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let nombre;
	let lugar;
	let cantPersonas;
	let temporada;
	let contBariloche = 0;
	let contSalta = 0;
	let contCataratas = 0;
	let cantPersMax = 0;
	let totalPersIniverno = 0;
	let promPersInvierno;
	let div = 0;
	let lugarMasVisitado;

	do
	{
		
		nombre = prompt("ingrese nombre del titular");

		lugar = prompt("ingrese el destino 'bariloche', 'cataratas' o 'salta'.");

		temporada = prompt("ingrese temporada 'otoño' 'invierno' 'verano' 'primavera' ");

		cantPersonas = parseInt(prompt("ingrese la cantidad de personas a viajar"));

		if(lugar == "bariloche")
		{
			contBariloche++;
		}

		else if(lugar == "cataratas")
		{
			contCataratas++;
		}

		else if(lugar = "salta")
		{
			contSalta++;
		}

		if(cantPersonas>cantPersMax)
		{
			nombreCantPasajerosMax = nombre;

			cantPersMax = cantPersonas
		}
			


		if(temporada == "invierno")
		{
			totalPersIniverno = totalPersIniverno + cantPersonas;

			div++
		}


		respuesta = prompt("¿Desea continuar? 's' para si 'n' para no")
	

	}while(respuesta == "s");





	if(totalPersIniverno!=0){

		promPersInvierno = totalPersIniverno/div;
	}

	if (contBariloche > contCataratas && contBariloche > contSalta)
	{
		lugarMasVisitado = "bariloche"
	}

	else if ( contSalta > contCataratas && contSalta > contBariloche)
	{
		lugarMasVisitado = "Salta"
	}

	else
	{
		lugarMasVisitado = "cataratas"
	}

	
		
	console.log("(a) El lugar mas elegido es: "+lugarMasVisitado)
	console.log("(b) la persona que lleva mas pasajeros es "+nombreCantPasajerosMax+" y lleva a "+cantPersMax+" personas")
	console.log("(c) el promedio de personas por viaje en invierno es de "+promPersInvierno+" personas")



}
