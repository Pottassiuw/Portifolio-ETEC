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
