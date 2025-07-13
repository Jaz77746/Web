// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te me escapaste Y yo quedé indefenso", time: 1 },
  { text: "Me desarma pensar que es mi culpa que seas un recuerdo, oh oh ", time: 6 },
  { text: "Solo un recuerdo pero tan intenso, oh oh", time: 14 },
  { text: "No saber si te volveré a ver para mí es un misterio, oh oh ", time: 20 },
  { text: "Nunca te pude hablar", time: 28 },
  { text: "Nunca te pude hablar y ya", time: 30 },
  { text: "Duele porque al final", time: 33 },
  { text: "No quiero contar todos los besos", time: 37 },
  { text: "Que nunca llegaron a tu boca", time: 41 },
  { text: "Siguen esperando tu regreso para volverte loca", time: 44 },
  { text: "No quiero contar cuántas canciones", time: 51 },
  { text: "No bailé contigo por cobarde", time: 52 },
  { text: "Como deben ser tantos millones, no sé cuánto me tarde", time: 56 },
  { text: "No quiero contar todas las cosas", time: 64 },
  { text: "Que a final de cuentas sé que nunca hicimos", time: 64 },
  { text: "No quiero contarlas", time: 104 },
  { text: "Porque sé muy bien que si las cuento, tal vez no termino", time: 108 },
  { text: "At the time", time: 144 },
  { text: "The whisper of birds", time: 148 },
  { text: "Lonely before the sun cried", time: 153 },
  { text: "Fell from the sky", time: 158 },
  { text: "Like water drops", time: 164 },
  { text: "Where I'm now? I don't know why", time: 169 },
  { text: "Nice butterflies in my hands", time: 176 },
  { text: "Too much light for twilight", time: 183 },
  { text: "In the mood for the flowers", time: 188 },
  { text: "Love.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6.3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);