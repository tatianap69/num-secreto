// declarar variables globales
let numeroSecreto = 0;
let numeroUsuario = 0;
let numeros = [];
let numeroMax = 10;
// función para cambiar textos
function iniciales() {
  // variable de intentos
  intentos = 1;
  // textos iniciales
  asignarTexto("h1", "Juego del número secreto");
  asignarTexto("p", `Indica un número del 1 al ${numeroMax}`);
  // almacenar el número en una variable
  numeroSecreto = generarNumero();
}
// llamar valores iniciales
iniciales();
// función para asignar texto a los elementos
function asignarTexto(elemento, texto) {
  document.querySelector(elemento).innerHTML = texto;
  return;
}
// función para generar número
function generarNumero() {
  let numero = Math.floor(Math.random() * numeroMax) + 1;
  if (numeros.length == numeroMax) {
    asignarTexto("p", "Ya se sortearon todos los números posibles.");
  } else {
    if (numeros.includes(numero)) {
      return generarNumero();
    } else {
      numeros.push(numero);
      return numero;
    }
  }
}
// función para verificar
function verificar() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroSecreto === numeroUsuario) {
    asignarTexto(
      "p",
      `Acertaste el número en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (numeroSecreto != undefined) {
    if (numeroSecreto > numeroUsuario) {
      asignarTexto("p", "El número secreto es mayor");
    } else {
      asignarTexto("p", "El número secreto es menor");
    }
    intentos++;
    limpiar();
  }

  return;
}
// función para limpiar input
function limpiar() {
  document.querySelector("#valorUsuario").value = "";
}
// función para reinciar el juego
function reiniciar() {
  limpiar();
  iniciales();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
