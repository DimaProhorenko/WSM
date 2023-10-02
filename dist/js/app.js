const burger = document.querySelector('.burger');

if (burger) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('opened');
        // burger.setAttribute('aria-expanded', );
    
        if (burger.ariaExpanded == 'true') {
            burger.setAttribute('aria-expanded', false);
        } else {
            burger.setAttribute('aria-expanded', true);
        }
        
    })
}