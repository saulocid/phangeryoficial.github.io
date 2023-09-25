
//musica
const tracks = document.querySelectorAll('#tracks li');
const audio = document.querySelector('#audio');

tracks.forEach(track => {
  track.addEventListener('click', function() {
    audio.src = this.querySelector('a').getAttribute('data-src');
    audio.play();
  });
});

//Función del botón hamburguesa
const button = document.querySelector(".button");
const nav = document.querySelector(".nav");
button.addEventListener("click", () => {
  nav.classList.toggle("activo");
});

//Variable año actual para footer
let anioActual = new Date().getFullYear();
document.getElementById("anio").textContent = anioActual;

//Variable que resta 2019 al año actual
document.getElementById("diferencia").textContent = anioActual - 2019;


