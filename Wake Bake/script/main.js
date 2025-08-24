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


document.addEventListener("DOMContentLoaded", () => {

    const closeAccordeonsIn = (container) => {
        container.querySelectorAll(".accordeon__content").forEach(content => {
            content.classList.remove("open");
            content.style.maxHeight = null;
            content.style.padding = "0";
            content.style.marginTop = "0";
            content.style.opacity = "0";
            content.style.visibility = "hidden";
        });

        container.querySelectorAll(".accordeon__button-img").forEach(img => {
            img.classList.remove("active");
            const arrow = img.querySelector("svg");
            if (arrow) arrow.classList.remove("rotated");
        });
    };

    document.querySelectorAll(".accordeon").forEach(tab => {
        new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    if (tab.classList.contains("accordeon--active")) {
                        closeAccordeonsIn(tab);
                    }
                }
            });
        }).observe(tab, { attributes: true });
    });

    document.querySelectorAll(".accordeon__button").forEach(button => {
        button.addEventListener("click", () => {
            const wrapper = button.closest(".accordeon__wrapper");
            const content = wrapper.querySelector(".accordeon__content");
            const img = button.querySelector(".accordeon__button-img");
            const arrow = img.querySelector("svg");

            const isOpen = content.classList.contains("open");

            if (isOpen) {
                content.classList.remove("open");
                content.style.maxHeight = null;
                content.style.padding = "0";
                content.style.marginTop = "0";
                content.style.opacity = "0";
                content.style.visibility = "hidden";
                img.classList.remove("active");
                arrow.classList.remove("rotated");
            } else {

                const parentAccordeon = button.closest(".accordeon");
                closeAccordeonsIn(parentAccordeon);


                content.classList.add("open");
                content.style.maxHeight = content.scrollHeight + 40 + "px";
                content.style.padding = "0px 30px 40px 30px";
                content.style.marginTop = "-20px";
                content.style.opacity = "1";
                content.style.visibility = "visible";
                img.classList.add("active");
                arrow.classList.add("rotated");
            }
        });
    });
});
