let menuSnitch = document.getElementById("menuSnitch");
let snitch = document.getElementById("snitch");
let bgSnitch = document.getElementById("bgSnitch");

let curiosidades = [
  "La snitch tiene su origen en la cacería de snidgets dorados, animales similares a la actual pelota alada. En 1929 fueron insertados en el juego de Quidditch por el presidente del Consejo de Magos, Barberus Bragge, diciendo que regalaría 150 galeones (un millón de galeones en la actualidad) al que lograra atraparla en el transcurso del juego",
  "El mago Bowman Wright del Valle de Godric inventó la snitch (o snitch dorada), la cual reemplazaría al 'snidget dorado', la única diferencia de ésta respecto a las demás es que fue hechizada para que se mueva solamente dentro del campo de juego; y desde entonces ésta es la que prevalece hasta nuestros días.",
  "La snitch posee un tipo de memoria táctil que le permite reconocer a la primera persona que la tocó. Normalmente tiene que ser tocada por primera vez en el primer juego de Quiddich en el que se utilice, es por ello que incluso el mismo fabricante tiene que manipularla con guantes protectores",
  "Albus Dumbledore le dejó a Harry en su testamento la snitch que este atrapó en su primer partido de Quidditch, la cual contenía una de las tres Reliquias de la Muerte, la Piedra de la Resurrección.",
];

function playSnitch() {
  menuSnitch.style.display = "none";
  ganadorSnitch.style.display = "none";
  snitch.style.visibility = "visible";
  bgSnitch.style.cursor = "url('../img/cursor.png'), auto";
}

function moveSnitch() {
  //Generamos posición aleatoria de top y left entre 0% del div y el 95-90 para que no se salga demasiado
  snitch.style.position = "absolute";
  snitch.style.top = Math.floor(Math.random() * 95) + "%";
  snitch.style.left = Math.floor(Math.random() * 95) + "%";
}

//Cada vez que el ratón "entre" en el gif de la snitch, la movemos (tras 100 ms para que no sea imposible)
snitch.addEventListener("mouseenter", () =>
  setTimeout(function () {
    moveSnitch();
  }, 100)
);

function catchedSnitch() {
  snitch.style.visibility = "hidden";
  ganadorSnitch.style.display = "block";
  document.getElementById("curiosidad").innerHTML =
    curiosidades[Math.floor(Math.random() * (4 - 0))];
}

function startPiano() {
  let partitura = document.getElementById("partitura");
  let teclas = document.getElementById("teclas");
  let menuPiano = document.getElementById("menuPiano");
  menuPiano.style.display = "none";
  partitura.style.display = "block";
  teclas.style.display = "flex";
}

function playPiano(nota) {
  let sonido = new Audio("notas/" + nota + ".wav");
  sonido.play();
}
