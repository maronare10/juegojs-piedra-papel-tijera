
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//1 es piedra, 2 es papel, 3 es tijera

function eleccion(jugada) {

  let resultado = ""

  if (jugada == 1) {
    resultado = "piedra "
  } else if (jugada == 2) {
    resultado = "papel"
  } else if (jugada == 3) {
    resultado = "tijera"
  } else {
    resultado = "no es una opción"
  }
  return resultado
}


let jugador = 0
// let min = 1
// let max = 3
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
  
  pc = aleatorio(1, 3)
  jugador = prompt("elige: 1 para piedra, 2 para papel, 3 para tijera")

  alert ("pc: " + eleccion(pc))
  alert ("jugador: " + eleccion(jugador))

  //COMBATE
  if (pc == jugador) {
    alert("empate")
  } else if (jugador == 1 && pc == 3) {
    alert("ganaste")
    triunfos = triunfos + 1
  } else if (jugador == 2 && pc == 1) {
    alert("ganaste")
    triunfos = triunfos + 1
  } else if (jugador == 3 && pc == 2) {
    alert("ganaste")
    triunfos = triunfos + 1
  } else {
    alert("perdiste")
    perdidas = perdidas + 1
  }
}

 alert ("ganaste " + triunfos + " veces y perdiste" + perdidas + " veces.")


// alert("Elegiste " + jugador)


// if (jugador == 1) {
//   alert("piedra ")
// } else if (jugador == 2) {
//   alert("papel")
// } else if (jugador == 3) {
//   alert("tijera")
// } else {
//   alert("perdió")
// }

// if (pc == 1) {
//   alert("pc piedra ")
// } else if (pc == 2) {
//   alert("pc papel")
// } else if (pc == 3) {
//   alert("pc tijera")
// } else {
//   alert("pc perdió")
// }