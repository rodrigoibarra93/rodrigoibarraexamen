/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  
  let marca;
  let precio;
  let kg;
  let tipo;
  let kgTotal = 0;
  let marcaLiqCaro;
  let precioLiqCaro = 0;
  let marcaSoldLiviano;
  let kgAnterior = 0;
  let flag = 0;
  let respuesta;

  
  do{

    tipo = prompt("ingrese el tipo 's' para solido 'l' para liquido");

    marca = prompt("ingrese la marca del producto");

    precio = parseInt(prompt("ingrese el precio del producto"));

    kg = parseInt(prompt("ingrese el peso del producto"));

    kgTotal = kgTotal + kg;

    if(tipo == "l")
    {

      if(precio>precioLiqCaro)
      {

        marcaLiqCaro = marca;

        precioLiqCaro = precio;

      }

    }
    else if(tipo == "s")
    {
      
      
      
      if(flag == 0 || kg<kgAnterior)
      {
        
        marcaSoldLiviano = marca;

        kgAnterior = kg;

        flag = 1;

      }

    }

      respuesta = prompt("desea continuar? 's' para si 'n' para no");
  }while(respuesta=="s");

  
  console.log("(a) el peso total de la compra es de "+kgTotal+" kilogramos");
  console.log("(b) la marca del producto liquido mas caro: "+marcaLiqCaro);
  console.log("(c) la marca del solido mas liviano es: "+marcaSoldLiviano);
}
