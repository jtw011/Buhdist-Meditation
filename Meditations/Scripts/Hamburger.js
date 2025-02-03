document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function () {

        menu.classList.toggle('responsive');
        
        hamburger.classList.toggle('open');

        if (hamburger.classList.contains('open')) {
            hamburger.textContent = '×';
        } else {
            hamburger.textContent = '☰';
        }
    });
});

