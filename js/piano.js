function startPiano() {
  let partitura = document.getElementById("partitura");
  let teclas = document.getElementById("teclas");
  let menuPiano = document.getElementById("menuPiano");
  let bgPiano = document.getElementById("bgPiano");
  menuPiano.classList.add("d-none");
  partitura.classList.remove("d-none");
  teclas.classList.remove("d-none");
  bgPiano.classList.add("h100");
}

function playPiano(nota) {
  let sonido = new Audio("notas/" + nota + ".wav");
  sonido.play();
}

document.addEventListener("keydown", (event) => {
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

    let clave = teclado.find((clave) => clave.key == event.key);
    playPiano(clave.nota);
  }
});
