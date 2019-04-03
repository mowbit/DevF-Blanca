var texto = "uno dos tres cuatro cinco seis siete";
var arreglo = texto.split(" ");



/*for (a = 0; a < arreglo.length; a++ ){ // Estructura de control para iteración. Parte 1 asignación. Parte 2 Condicional solo entra si es TRUE. Parte 3 incremento o decremento.
    console.log(arreglo[a]);
    }*/


var a = 0;

while(a < arreglo.length){ // se ejecuta mientras la condición se cumpla.
    var resultado = document.getElementById("Res1").innerHTML;
    document.getElementById("Res1").innerHTML=resultado + arreglo[a] + " <br>";
    a++;
}


    var i = 0;

do {

    var resultado = document.getElementById("Res1").innerHTML;
    document.getElementById("Res1").innerHTML=resultado + arreglo[i] + " <br>";
    i++;
    
    
} while (i <= 5)
    
    