const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__list');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');

});
 
navLinks.forEach(nav__link => {
         nav__link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})