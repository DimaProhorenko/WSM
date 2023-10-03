const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

if (burger) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('opened');
        nav.classList.toggle("nav--open");

        if (burger.ariaExpanded == 'true') {
            burger.setAttribute('aria-expanded', false);
            nav.setAttribute('aria-expanded', false);
        } else {
            burger.setAttribute('aria-expanded', true);
            nav.setAttribute('aria-expanded', true);
        }

    })
}


const swiper = new Swiper('.swiper', {
    speed: 400,
    slidesPerView: 1.2,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1.6
        },
        900: {
            slidesPerView: 2.9
        }
    }
})