//var uno = prompt("ingresa un valor");
// var dos = prompt("ingresa otro valor");

/*if (uno == "hola"){
    document.getElementById("Res1").innerHTML=uno;
}

if(uno == "hello"){
    document.getElementById("Res1").innerHTML=uno;
}*/



/* 

SWITCH:
    Ejecuta una acción dependiendo de la variable.

*/


/*
switch(uno){
    case "hola":
        document.getElementById("Res1").innerHTML=uno;
        break;
    case "hello":
        document.getElementById("Res1").innerHTML=uno;
        break;
    default:
        document.getElementById("Res1").innerHTML="no existe la opción";
}

***************************************************************

numero = prompt("Escribe el 1 o 2")
numero = Number(numero);
switch(numero){
    case 1:
        document.getElementById("Res1").innerHTML="escribiste el numero " +numero;
        break;
    case 2:
        document.getElementById("Res1").innerHTML="escribiste el numero " + numero;
        break;
    default:
        document.getElementById("Res1").innerHTML="no existe la opción";
}

*/


var fecha = prompt("Dame una fecha");

switch (new Date(fecha).getDay() ){
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
}

console.log(new Date().getMonth() );

switch (new Date().getMonth() ){
    case 0:
        console.log("Enero");
        break;
    case 1:
        console.log("Febrero");
        break;
    case 2:
        console.log("Marzo");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
}


var Num3ro = Number(prompt("Dame un número."));

/* if (Num3ro % 2 == 0){
    document.getElementById("Res1").innerHTML="Es un número par";
} else {
    document.getElementById("Res1").innerHTML="Es un número impar";
} */

switch (Num3ro % 2){
    case 1: 
        document.getElementById("Res1").innerHTML="Es impar";
        break;
    case 2:
        document.getElementById("Res1").innerHTML="Es Par";
        break;        
}


texto1 = "Este es el texto 1, 2s, 3sdf, 4sd";

console.log(texto1.charAt(5)); // charAt es para mostrar la posición de el caracter en un string.

console.log (texto1.indexOf("E")); // indexOf Obtener el índice de donde se encuentra cierto caracter.

console.log (texto1.replace("1", "uno"));// Remplazar texto

console.log (texto1.slice(0,3)); //para extraer una parte del texto. El último número es exclusivo y NO se muestra.

console.log(texto1.split(" "));

var spliText = texto1.split(" ");

console.log(spliText.length);








