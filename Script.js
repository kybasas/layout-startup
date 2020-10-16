

const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('.modile-nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav-active');
}