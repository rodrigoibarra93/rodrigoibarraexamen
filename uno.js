/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let temperatura = 0;
	let sexo;
	let edad;
	let cantPersonasM = 0;
	let cantPersonasF = 0;
	let edadPromedio;
	let edadSumaTotal = 0;
	let mujerTempMax = 0;
	let nombreMujerTempMax;
	let i = 5
	
	
	while(i>0){

		nombre = prompt("ingrese su nombre");

		temperatura = parseInt(prompt("ingrese su temperatura sin °"));

		sexo = prompt("ingrese su sexo 'm' por masculino y 'f' por femenino");

		edad = parseInt(prompt("ingrese su edad"));

		if(sexo == "f"){

			cantPersonasF++;
			
			if(temperatura>mujerTempMax);{

				mujerTempMax = temperatura;
	
				nombreMujerTempMax = nombre;
			}

		}
		else if (sexo=="m"){

			cantPersonasM++;
		}
		
		
		edadSumaTotal = edadSumaTotal + edad;
		

		i--;
	}

	edadPromedio = edadSumaTotal/5;

	//a)// 
	console.log("hay "+cantPersonasM+" hombres y "+cantPersonasF+" mujeres ");
	//b)//
	console.log("la edad promedio es de "+edadPromedio+" años");
	//c)//
	console.log("la mujer con la temperatura mas alta es de "+nombreMujerTempMax+" y tiene "+mujerTempMax+" grados ");
}
