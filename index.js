
const headerMobileContent = document.querySelector('.header__mobile__content');
const menuButton = document.querySelector('.line1');
const headerMobile = document.querySelector('.header__mobile')

menuButton.addEventListener('click', () => { // Обрабатываем клик на элемент с классом .line1
    headerMobileContent.classList.toggle('header__open')
    menuButton.classList.toggle('opened');
    headerMobile.style.height == '100%' ? headerMobile.style.height = '50px' : headerMobile.style.height = '100%'   
})