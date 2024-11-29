var formulario = document.querySelector(".formulario") // Se esta llamando un id en lugar de una clase, por lo que cambiamos a clase y escribimos bien la clase.

formulario.onsubmit = function(e) {

  e.preventDefault(); // Le faltaba escribirse completo, le faltaba el default
  
  var n = formulario.elements[0] //Se declara la variable para obtener el elemento en la posición 0
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value // de guarda en nombre el valor de n
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) { // Se evaluan los datos agregados en el formulario
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad) //Si el nombre del invitado es mayor que 0, tiene una edad mayor a 18 y menor a 120, se agrega a la lista de invitados.
  }
}

var botonBorrar = document.createElement("button") //Se crea un evento para el botón de borrar
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br") //Se agrega un salto de linea
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) { //Para agregar la nacionalidad del usuario

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados") //Se esta referenciando algo del Html por su Id, sin embargo, no encuentro la div o seccion, por lo que lo agregare. 

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista") //Se ecribio mal la palabra add
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) { //Duncion para crear un espacio que se pueda visualizar el invitado registrado
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre) /
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre) //llama la funcion para crear elemento nombre
crearElemento("Edad", edad) //llama la funcion para crear elemento edad
crearElemento("Nacionalidad", nacionalidad) //llama la funcion para crear elemento nacionalidad


var botonBorrar = document.createElement("button") //Declarando variab
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove() // Para eliminar al hacer clicl en el botón de borrar
  }
}