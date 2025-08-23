function scrollToForm() {
    const target = document.getElementById("applicationForm");
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
}


const openButton = document.getElementById('openGift');
const closeButton = document.getElementById('closeGift');
const modal = document.querySelector('.recipe');


openButton.addEventListener('click', () => {
    modal.classList.add('active');
});


closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.remove('active');
    }
});

////

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".programm__item");
    const tabs = document.querySelectorAll(".accordeon");

    items.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();

            items.forEach(i => i.classList.remove("programm__item--active"));
            tabs.forEach(t => t.classList.remove("accordeon--active"));

            item.classList.add("programm__item--active");

            const link = item.querySelector(".programm__link");
            const targetId = link.getAttribute("href").replace("#", "");
            const targetTab = document.getElementById(targetId);

            if (targetTab) {
                targetTab.classList.add("accordeon--active");
            }
        });
    });
});

// //acc


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".accordeon__button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const wrapper = button.closest(".accordeon__wrapper");
            const content = wrapper.querySelector(".accordeon__content");
            const img = button.querySelector(".accordeon__button-img");
            const arrow = img.querySelector("svg");

            const isOpen = content.style.display === "flex";

            if (isOpen) {
                content.style.display = "none";
                arrow.classList.remove("rotated");
                img.classList.remove("active");
            } else {
                content.style.display = "flex";
                arrow.classList.add("rotated");
                img.classList.add("active");
            }
        });
    });
});

