const startButton = document.getElementById("enter-experience");
const ambientAudio = document.getElementById("audio-intro");

function isPlaying(audio) {
  return !!(audio && !audio.paused && !audio.ended && audio.currentTime > 0);
}

startButton.addEventListener("click", () => {
  if (isPlaying(ambientAudio)) {
    ambientAudio.pause();
    ambientAudio.currentTime = 0;
    startButton.textContent = "Activar archivo sonoro";
    console.log("Audio detenido y reiniciado");
    return;
  }

  ambientAudio
    .play()
    .then(() => {
      startButton.textContent = "Parar sonido";
      console.log("Audio iniciado correctamente");
    })
    .catch((error) => {
      console.error("Error al reproducir el audio:", error);
    });
});

