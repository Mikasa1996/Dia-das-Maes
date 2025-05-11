let currentIndex = 0;
const images = document.querySelectorAll('.carousel-item');

function changeImage() {
    images.forEach((img, index) => {
        img.style.display = index === currentIndex ? 'block' : 'none';
    });
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 3000); // Troca de imagem a cada 3 segundos
changeImage(); // Exibe a primeira imagem

const playButton = document.getElementById("playButton");
const musica = document.getElementById("musica");

playButton.addEventListener("click", () => {
    if (musica.paused) {
        musica.play(); // Toca a música
        playButton.textContent = "Pausar Música"; // Altera o texto do botão para Pausar
    } else {
        musica.pause(); // Pausa a música
        playButton.textContent = "Tocar Música"; // Altera o texto do botão para Tocar
    }
});
