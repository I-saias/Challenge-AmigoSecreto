//variables
let amigosIngresados = [];
let entrada;
let lista;
let resultado;

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
        lista.appendChild(amigo);//esto agrega el elemento li al elemento ul
        
 
    }
    
}
 function sortearAmigo(){

    if (amigosIngresados.length > 0){ //comprueba si hay elementos en el array

        console.log("hay elementos en el array");

        let sorteo = Math.floor(Math.random() * amigosIngresados.length); //esto obtiene un indice aleatorio
        let amigoSorteado = amigosIngresados[sorteo];//aqui se obtiene el nombre del amigo sorteado
        let resultado = document.getElementById("resultado"); // captura la lista de ul del html
        lista.innerHTML = "";//limpia los datos de la lista ul
        resultado.innerHTML = "El amigo secreto es: " +amigoSorteado; // muestra el resultado que es el amigo sorteado
    }else{
        console.log ("no hay elementos");
    }
 }
 
 function reiniciarSorteo() {
    amigosIngresados = []; // Vaciar el array
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista en HTML
    document.getElementById("resultado").innerHTML = ""; // Borrar el resultado del sorteo
}