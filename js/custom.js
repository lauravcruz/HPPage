let bg = document.getElementById("bg-snitch");
let images = [];

for(let i = 1; i <= 7; i++){
    images[i] = "../img/hg" + i + ".jpg";
}

bg.style.backgroundImage = "url(../img/hg1.jpg)";

setTimeout(function() {
    console.log("HOlita");
    i = 1; 
    bg.style.backgroundImage = "url(" + images[i] + ")";
    i += 1;
    if (i == images.length) {
      i =  0;
    }
}, 1000);
