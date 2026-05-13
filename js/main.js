
(function () {
    const buttons = document.querySelectorAll('[data-accordion-button]');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const parent = button.parentElement;
            parent.classList.toggle('active');
        });
    });
})()


(function () {
    const form = document.querySelector('[data-booking-form]');
    const popup = document.querySelector('[data-popup]');
    const closeBtn = document.querySelector('[data-popup-close]');
    const popupContent = document.querySelector('[data-popup-content]');


    closeBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
        clearValues();
    });


    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.add('hidden');
            clearValues();
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        inputs.forEach(input => {
            removeError(input);

            if (!input.value.trim()) {
                setError(input, 'Заполните поле');
                isValid = false;
                return;
            }

            if (input.type === 'email') {
                if (!validateEmail(input.value)) {
                    setError(input, 'Некорректный email');
                    isValid = false;
                }
            }

            if (input.name === 'phone') {
                if (input.value.trim().length < 5) {
                    setError(input, 'Некорректный телефон');
                    isValid = false;
                }
            }
        });

        if (isValid) {
            popup.classList.remove('hidden');
        }

    });

    const inputs = form.querySelectorAll('input');


    inputs.forEach(input => {
        input.addEventListener('input', () => {
            removeError(input);
        });
    });

    function clearValues() {
        inputs.forEach(input => {
            input.value = '';
        });
    }

    function setError(input, message) {
        input.classList.add('error');

        let error = input.parentElement.querySelector('.error-text');

        if (!error) {
            error = document.createElement('div');
            error.className = 'error-text';
            input.parentElement.appendChild(error);
        }

        error.textContent = message;
    }

    function removeError(input) {
        input.classList.remove('error');

        const error = input.parentElement.querySelector('.error-text');
        if (error) error.remove();
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
})()
(function () {

    const buttons = document.querySelectorAll('[data-scroll]');

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.dataset.scroll;
            const section = document.getElementById(id);

            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
})()
(function () {

    const dots = document.querySelectorAll('[data-dot]');

    const swiper = new Swiper(".swiper", {

        spaceBetween: 16,
        slidesPerGroup: 1,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },

            576: {
                slidesPerView: 2,
                spaceBetween: 16,
            },

            768: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });


})();
//# sourceMappingURL=main.js.map
