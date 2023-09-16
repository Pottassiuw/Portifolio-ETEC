function toggleMenu() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = 'assets/hamburguerMenu.png';
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = 'assets/closeMenu.png';
    }
}

// Adicione este código para fechar o menu ao clicar em um item do menu
let menuItems = document.querySelectorAll('.nav-item');

menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        toggleMenu(); // Chama a função para fechar o menu
    });
});

const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const bullets = document.querySelectorAll('.bullet');
const intervalTime = 5000; // Tempo em milissegundos entre as transições (5 segundos)
let currentIndex = 0;

bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        goToSlide(index);
    });
});

function goToSlide(index) {
    currentIndex = index;
    const translateX = -index * 100; // 100% de deslocamento para cada slide
    carousel.style.transform = `translateX(${translateX}%)`;

    // Ative a classe 'active' no bullet atual e remova-a dos outros
    bullets.forEach((bullet, i) => {
        if (i === index) {
            bullet.classList.add('active');
        } else {
            bullet.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
}

// Configurar um intervalo para avançar automaticamente os slides
setInterval(nextSlide, intervalTime);

// Inicialize o carrossel com o primeiro slide
goToSlide(currentIndex);
