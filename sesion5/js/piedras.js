alert(" Ahora jugaremos piedra, papel o tijera. \n Ahora sigue las instrucciones para jugar. \n Escribe Piedra para Piedra \n Escribe Papel para Papel \n Escribe Tijera para Tijera \n A jugar");

var jug1 , jug2; 

jug1 = prompt("Escribe el nombre del jugador 1");
jug2 = prompt("Escribe el nombre del jugador 2");

var mano1, mano2;

mano1 = prompt(jug1 + ", " + "es tu turno.");
mano2 = prompt(jug2 + ", " + "ahora tú.");


if (mano1 == mano2){
    console.log("Empate");
    alert("Empate")
} else if ((mano1 == "piedra")&&(mano2 == "papel")){
    console.log("Gana " + jug2 + " por " + mano2);
    alert("Gana " + jug2 + " por " + mano2);
} else if ((mano1 == "papel")&&(mano2 == "piedra")){
    console.log("Gana " + jug1 + " por " + mano1);
    alert("Gana " + jug1 + " por " + mano1);
} else if ((mano1 == "papel")&&(mano2 == "tijera")){
    console.log("Gana " + jug2 + " por " + mano2);
    alert("Gana " + jug2 + " por " + mano2);
} else if ((mano1 == "tijera")&&(mano2 == "papel")){
    console.log("Gana " + jug1 + " por " + mano1);
    alert("Gana " + jug1 + " por " + mano1);
} else if ((mano1 == "tijera")&&(mano2 == "piedra")){
    console.log("Gana " + jug2 + " por " + mano2);
    alert("Gana " + jug1 + " por " + mano1);
} else if ((mano1 == "piedra")&&(mano2 == "tijera")){
    console.log("Gana " + jug1 + " por " + mano1);
}