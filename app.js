//declaro variables globales
let listaamigos = [];
let indicesElegidos = [];
let nombre, elegido, resultado;
let cantidad = 0;   
let numeroSorteo = 1; 
//funcion para agregar amigos 
function agregarAmigo() {
    nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Por favor ingrese un nombre");
        return;
    } else {
        listaamigos.push(nombre);
        console.log(listaamigos);
        console.log(mostrarAmigos());
    } return; 
}
//esta funcion delimitara la cantidadd para poder sortear
//la lista dependiendo de cuantos amigos se agreguen
function cantidadAmigos() {
    cantidad = listaamigos.length;
    console.log(cantidad);
    return cantidad;
}
//funcion para mostrar la lista de amigos 
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = "";
    for (let i = 0; i < listaamigos.length;  i++){
        for (let j = 0; j < listaamigos.length; j++){
            if (i === j) continue;
            let li = document.createElement("li");
            li.innerText = listaamigos[i];
            lista.appendChild(li);
            break;
        }
   }
}
//funcion para ver si incluye el indice en la lista de indices elegidos
function parametro(indice) {
    return indicesElegidos.includes(indice);
}
//funcion para sortear la lista de amigos usamos .length sin sumar 1 pq el sub indice empieza en 0
function sortearAmigo () {
    elegido = Math.floor(Math.random() * listaamigos.length);
    //solo para ver los valores en la consola y comprobar que todo va bien xd
    console.log("sub indice Elegido: "+elegido);
    console.log("Numero sorteo: " + numeroSorteo);
    console.log("Maximo sorteos: " + (listaamigos.length));
    //condicional para limitar el sorte y que no repita 
    if (numeroSorteo == listaamigos.length + 1){
        alert("Ya se sortearon todos los amigos");
        console.log('gracias por ver el funcionamiento del código :D')
        return;
    } else {   //si el numero ya fue elejido vuelve a sortear con la recursividad sortearAmigo 
        if (parametro(elegido)){
                console.log("Ya fue elegido");
                return sortearAmigo();
            } else { //si no fue elegido se agrega a los la funcion de indices elegidos y se muestra el resultado
                indicesElegidos.push(elegido);
                console.log("Indices elegidos: ");
                console.log(indicesElegidos);
                mostrarResultado();
                //se suma el numero de sorteos realizados para tener un parametro de control 
                numeroSorteo++;
            }
        return elegido; 
    }
}
function mostrarResultado() {
    resultado = document.getElementById("resultado");
    resultado.innerHTML = "";   
    let p = document.createElement("p");
    p.innerText = "Tu amigo secreto es: " + listaamigos[elegido];
    resultado.appendChild(p);
    return;
}