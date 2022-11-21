/*Este documento javascript es para el juego del piano*/
function startPiano(tipo) {
  if (tipo == "notas") {
    let partitura = document.getElementById("partitura");
    partitura.classList.remove("d-none");
  } else {
    let partituraLetra = document.getElementById("partituraLetra");
    partituraLetra.classList.remove("d-none");
  }

  let teclas = document.getElementById("teclas");
  let menuPiano = document.getElementById("menuPiano");
  let bgPiano = document.getElementById("bgPiano");
  menuPiano.classList.add("d-none");

  teclas.classList.remove("d-none");
  bgPiano.classList.add("h100");
}

function playPiano(nota) {
  /*El html nos pasa por parámetro una nota musical que hacemos sonar*/
  let sonido = new Audio("notas/" + nota + ".wav");
  sonido.play();
}

document.addEventListener("keydown", (event) => {
  /*Para jugar con el teclado, asociamos un caracter a una de las notas del piano:*/
  if (event.key.match(/[asSdDfgGhHjJklLñÑ]/)) {
    let teclado = [
      { key: "a", nota: "Si4" },
      { key: "s", nota: "Do5" },
      { key: "S", nota: "DoSos5" },
      { key: "d", nota: "Re5" },
      { key: "D", nota: "ReSos5" },
      { key: "f", nota: "Mi5" },
      { key: "g", nota: "Fa5" },
      { key: "G", nota: "FaSos5" },
      { key: "h", nota: "SolSos5" },
      { key: "H", nota: "SolSos5" },
      { key: "j", nota: "La5" },
      { key: "J", nota: "LaSos5" },
      { key: "k", nota: "Si5" },
      { key: "l", nota: "Do6" },
      { key: "L", nota: "DoSos6" },
      { key: "ñ", nota: "Re6" },
      { key: "Ñ", nota: "ReSos6" },
    ];

    /*Con find encontramos qué nota es qué tecla del teclado y así reutilizamos la función 
    que usamos cuando jugamos con el ratón*/
    let clave = teclado.find((clave) => clave.key == event.key);
    playPiano(clave.nota);
  }
});
