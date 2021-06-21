(function() {
    document.querySelector('.hamburger').addEventListener('click', function() {
        let body = document.querySelector('body');
        let header = document.querySelector('.header');
        let main = document.querySelector('.main');
        this.classList.toggle('hamburger__active');
        body.classList.toggle('not-scroll');
        header.classList.toggle('header__popup');
        main.classList.toggle('main--popup');
    });
})()