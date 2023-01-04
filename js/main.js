let menu = document.querySelector('.menu');
let menuMobile = document.querySelector('.menu-mobile');
let menuLinks = menu.getElementsByClassName('menu-link');
let menuMobileLinks = menuMobile.querySelectorAll('.menu-link');
let menuLinks1 = menu.querySelectorAll('.menu-link');

menuLinks1.forEach((element) => {
    element.addEventListener('click', menuActive);
})
menuMobileLinks.forEach((element) => {
    element.addEventListener('click', menuActive2);
})

function menuActive() {
        let current = document.getElementsByClassName('active');
        if(current.length > 0) {
            current[0].className = current[0].className.replace(' active', '');
        }
        this.className += ' active';
    }
    function menuActive2() {
        let menuMobile = document.querySelector('.menu-mobile');
        let current2 = menuMobile.getElementsByClassName('active');
        if(current2.length > 0) {
            current2[0].className = current2[0].className.replace(' active', '');
        }
        this.className += ' active';
    }


        let upElement = document.getElementById("upClick");
        upElement.addEventListener('click', () => {
    //    window.scrollTo(0, 0);
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
        });

        window.addEventListener('scroll', scrollFunction);
            function scrollFunction() {
            if (window.pageYOffset > 400) {
                upElement.style.display = "flex";
            }
            else {
                upElement.style.display = "none";
            }
        }
