function toggleMenu() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = '../Assets/hamburguerMenu.png';
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = '../Assets/closeMenu.png';
    }
}