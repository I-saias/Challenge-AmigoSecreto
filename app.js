// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variables
let amigosIngresados = [];
let entrada = 0;

//funciones 
function agregarAmigo(){
    entrada = document.querySelector("input").value;// Esto captura el valor de entrada del elemento input
    console.log(entrada);
  // validamos la entrada de usuario ,actualizamos la lista y limpiamos el input
    if (entrada == ""){
        alert("Por favor inserta un nombre");
    } else{
        amigosIngresados.push(entrada);
        console.log(amigosIngresados);
        document.querySelector("input").value = "";
        ActualizarAmigos();//llamamos a la funcion
        return
    }    
}

function ActualizarAmigos (){
    lista = document.getElementById("listaAmigos") // captura la lista ul del html
    lista.innerHTML = "";// limpia los datos de la  lista actual

    for (let i = 0; i < amigosIngresados.length; i++) { // bucle que recorre la variable tipo array
 
        let amigo = document.createElement("li");// esto crea un elemento li 
        amigo.textContent = amigosIngresados[i];// aqui se agrega el contenido de la variable al elemento li
        lista.appendChild(amigo);//esto agrega el elemento li al elemnto ul
 
    }
    
}
