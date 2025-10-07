// 🎬 Carrosséis

// Mostra um slide específico
function showSlide(carouselId, index) {
    const container = document.getElementById(carouselId);
    const wrapper = container.querySelector(".carousel-wrapper");
    const slides = wrapper.getElementsByClassName("carousel-slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[index].style.display = "block";
    container.dataset.current = index;
}

// Próximo slide
function nextSlide(carouselId) {
    const container = document.getElementById(carouselId);
    const wrapper = container.querySelector(".carousel-wrapper");
    const slides = wrapper.getElementsByClassName("carousel-slide");

    let index = parseInt(container.dataset.current) || 0;
    index = (index + 1) % slides.length;

    showSlide(carouselId, index);
}

// Slide anterior
function prevSlide(carouselId) {
    const container = document.getElementById(carouselId);
    const wrapper = container.querySelector(".carousel-wrapper");
    const slides = wrapper.getElementsByClassName("carousel-slide");

    let index = parseInt(container.dataset.current) || 0;
    index = (index - 1 + slides.length) % slides.length;

    showSlide(carouselId, index);
}

// 🎵 Tocar áudio com botão Play/Stop
function playAudio(id) {
    const audio = document.getElementById(id);
    const button = document.querySelector(`button[onclick="playAudio('${id}')"]`);

    if (!audio || !button) {
        console.error("Áudio ou botão não encontrado:", id);
        return;
    }

    // Pausar todos os outros áudios e resetar botões
    document.querySelectorAll("audio").forEach(a => {
        if (a !== audio) {
            a.pause();
            a.currentTime = 0;
            const otherButton = document.querySelector(`button[onclick="playAudio('${a.id}')"]`);
            if (otherButton) otherButton.textContent = "Play";
        }
    });

    // Toca ou pausa o áudio atual
    if (audio.paused) {
        audio.play().catch(err => {
            console.error("Erro ao tocar o áudio:", err);
            alert("O navegador bloqueou o som. Clique novamente para permitir.");
        });
        button.textContent = "Stop";
    } else {
        audio.pause();
        button.textContent = "Play";
    }

    // Quando terminar naturalmente
    audio.onended = () => {
        button.textContent = "Play";
    };
}

// 🧭 Rolar até carrossel
function scrollToCarousel(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// 🧠 Inicializar carrosséis ao carregar a página
window.onload = () => {
    showSlide("pop-carousel", 0);
    showSlide("rnb-carousel", 0);
    showSlide("rock-carousel", 0);
    showSlide("kpop-carousel", 0);
};


// ALBUNS 


// 🎧 Prévias de álbuns
const previews = [
    // Ariana Grande
    "mp3/eternalsunshine.mp3",
    "mp3/sweetener.mp3",
    "mp3/thankunext.mp3",
    // Taylor Swift
    "mp3/lover.mp3",
    "mp3/reputation.mp3",
    "mp3/folklore.mp3",
    //Rita Lee
    "mp3/ritalee.mp3",
    "mp3/mania.mp3",
    "mp3/amor.mp3"
];

const albumTitles = [
    "Ariana Grande - We can't be friends",
    "Ariana Grande - Sweetener",
    "Ariana Grande - Thank U, Next",
    "Taylor Swift - Lover",
    "Taylor Swift - Reputation",
    "Taylor Swift - Folklore",
    "Sabrina Carpenter - Short and Sweet",
    "Sabrina Carpenter - Singular Act 2",
    "Sabrina Carpenter - Evolution"
];

// ▶️ Tocar prévia de álbum (30 segundos)
function playPreview(index) {
    const audio = document.getElementById("audio-preview");
    const previewText = document.getElementById("preview-text");

    audio.src = previews[index];
    audio.play().catch(err => {
        console.error("Erro ao tocar prévia:", err);
        alert("O navegador bloqueou o som. Clique novamente para permitir.");
    });

    previewText.innerHTML = `Prévia: <strong>${albumTitles[index]}</strong>`;
    document.getElementById("preview-wrapper").style.display = "block";

    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
    }, 30000);
}

// BOTÃO // 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetID = this.getAttribute('href');
    const targetElement = document.querySelector(targetID);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});