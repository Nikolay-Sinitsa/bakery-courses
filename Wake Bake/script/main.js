function scrollToForm() {
    const formElement = document.getElementById("applicationForm");
    if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
    }
}

const openGiftButton = document.getElementById("openGift");
const closeGiftButton = document.getElementById("closeGift");
const recipeModal = document.querySelector(".recipe");

openGiftButton.addEventListener("click", () => {
    recipeModal.classList.add("active");
});

closeGiftButton.addEventListener("click", () => {
    recipeModal.classList.remove("active");
});

recipeModal.addEventListener("click", (event) => {
    if (event.target === recipeModal) {
        recipeModal.classList.remove("active");
    }
});

document.addEventListener('DOMContentLoaded', function () {

    const tabLinks = document.querySelectorAll('.programm__link');
    const allTabs = document.querySelectorAll('.accordeon');

    function switchTab(tabId) {

        const allContents = document.querySelectorAll('.accordeon__content');
        const allIcons = document.querySelectorAll('.accordeon__button-img');
        const allSvgs = document.querySelectorAll('.accordeon__button svg');

        allContents.forEach(content => {
            content.classList.remove('open');
            content.style.maxHeight = null;
        });

        allIcons.forEach(icon => {
            icon.classList.remove('active');
        });

        allSvgs.forEach(svg => {
            svg.classList.remove('rotated');
        });


        allTabs.forEach(tab => {
            tab.style.display = 'none';
        });


        const activeTab = document.getElementById(tabId);
        if (activeTab) {
            activeTab.style.display = 'flex';
        }

        tabLinks.forEach(link => {
            link.parentElement.classList.remove('programm__item--active');
            if (link.getAttribute('href') === `#${tabId}`) {
                link.parentElement.classList.add('programm__item--active');
            }
        });
    }


    tabLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const tabId = this.getAttribute('href').substring(1);
            switchTab(tabId);
        });
    });

    const accordeonWrappers = document.querySelectorAll('.accordeon__wrapper');

    accordeonWrappers.forEach((wrapper) => {
        wrapper.addEventListener('click', (e) => {

            const accordeonButton = e.target.closest('.accordeon__button');
            if (!accordeonButton) return;


            const content = accordeonButton.nextElementSibling;
            const icon = accordeonButton.querySelector('.accordeon__button-img');
            const svg = accordeonButton.querySelector('svg');


            const currentAccordeon = wrapper.closest('.accordeon');
            const allWrappersInTab = currentAccordeon.querySelectorAll('.accordeon__wrapper');

            allWrappersInTab.forEach(otherWrapper => {
                if (otherWrapper !== wrapper) {
                    const otherContent = otherWrapper.querySelector('.accordeon__content');
                    const otherIcon = otherWrapper.querySelector('.accordeon__button-img');
                    const otherSvg = otherWrapper.querySelector('svg');

                    otherContent.classList.remove('open');
                    otherIcon.classList.remove('active');
                    otherSvg.classList.remove('rotated');
                    otherContent.style.maxHeight = null;
                }
            });


            content.classList.toggle('open');
            icon.classList.toggle('active');
            svg.classList.toggle('rotated');

            if (content.classList.contains('open')) {
                content.style.maxHeight = (content.scrollHeight + 40) + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });


    switchTab('tabOne');
});


//gallery

const swiper = new Swiper('.gallery__slider', {

    spaceBetween: 32,
    slidesPerView: 4,

    pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 10
        },

        700: {
            slidesPerView: 3,
            spaceBetween: 20
        },

        1010: {
            slidesPerView: 4,
            spaceBetween: 10
        },

        1123: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }


});