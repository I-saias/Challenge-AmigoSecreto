// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variables
let amigosIngresados = [];
let entrada = 0;

//funciones 
function agregarAmigo(){
    entrada = document.querySelector("input").value;// Esto captura el valor de entrada del elemento input
    console.log(entrada);
  // validamos la entrada de usuario y actualizamos la lista y limpiamos el input
    if (entrada == ""){
        alert("Por favor inserta un nombre");
    } else{
        amigosIngresados.push(entrada);
        limpiar = document.querySelector("input").value = "";
        console.log(amigosIngresados);
    }    
}