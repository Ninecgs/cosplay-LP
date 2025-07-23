// Espera o DOM ser totalmente carregado para executar os scripts
document.addEventListener('DOMContentLoaded', () => {

    // Lógica para o Menu Mobile
    const menuButton = document.getElementById('menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const openMenu = () => {
        if (mobileMenu) {
            mobileMenu.classList.add('active');
        }
    };
    
    const closeMenu = () => {
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    };

    if (menuButton) menuButton.addEventListener('click', openMenu);
    if (closeMenuButton) closeMenuButton.addEventListener('click', closeMenu);
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Lógica para o Carrossel de Categorias
    const scrollContainer = document.getElementById('categories-container');
    const scrollLeftButton = document.getElementById('scroll-left-button');
    const scrollRightButton = document.getElementById('scroll-right-button');

    if (scrollContainer && scrollLeftButton && scrollRightButton) {
        const scrollAmount = 320; // Largura do card + gap
        scrollRightButton.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        scrollLeftButton.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

});
