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

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        recipeModal.classList.remove("active");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const weekItems = document.querySelectorAll(".programm__item");
    const weekTabs = document.querySelectorAll(".accordeon");

    weekItems.forEach(weekItem => {
        weekItem.addEventListener("click", (event) => {
            event.preventDefault();

            weekItems.forEach(item => item.classList.remove("programm__item--active"));
            weekTabs.forEach(tab => tab.classList.remove("accordeon--active"));

            weekItem.classList.add("programm__item--active");

            const linkElement = weekItem.querySelector(".programm__link");
            const targetId = linkElement.getAttribute("href").replace("#", "");
            const targetTab = document.getElementById(targetId);

            if (targetTab) {
                targetTab.classList.add("accordeon--active");
            }
        });
    });

    const closeAccordeonsInBlock = (accordeonBlock) => {
        accordeonBlock.querySelectorAll(".accordeon__content").forEach(contentElement => {
            contentElement.classList.remove("open");
            contentElement.style.cssText = "max-height:0;padding:0;margin-top:0;opacity:0;visibility:hidden;";
        });

        accordeonBlock.querySelectorAll(".accordeon__button-img").forEach(imageElement => {
            imageElement.classList.remove("active");
            const arrowIcon = imageElement.querySelector("svg");
            if (arrowIcon) arrowIcon.classList.remove("rotated");
        });
    };

    document.querySelectorAll(".accordeon").forEach(accordeonBlock => {
        new MutationObserver(mutations => {
            if (accordeonBlock.classList.contains("accordeon--active")) {
                closeAccordeonsInBlock(accordeonBlock);
            }
        }).observe(accordeonBlock, { attributes: true });
    });

    document.querySelectorAll(".accordeon__button").forEach(buttonElement => {
        buttonElement.addEventListener("click", () => {
            const wrapperElement = buttonElement.closest(".accordeon__wrapper");
            const contentElement = wrapperElement.querySelector(".accordeon__content");
            const imageElement = buttonElement.querySelector(".accordeon__button-img");
            const arrowIcon = imageElement.querySelector("svg");

            const isAlreadyOpen = contentElement.classList.contains("open");

            if (isAlreadyOpen) {
                contentElement.classList.remove("open");
                contentElement.style.cssText = "max-height:0;padding:0;margin-top:0;opacity:0;visibility:hidden;";
                imageElement.classList.remove("active");
                if (arrowIcon) arrowIcon.classList.remove("rotated");
            } else {
                const parentAccordeonBlock = buttonElement.closest(".accordeon");
                closeAccordeonsInBlock(parentAccordeonBlock);

                contentElement.classList.add("open");
                contentElement.style.cssText = `max-height:${contentElement.scrollHeight + 40}px;padding:0px 30px 40px 30px;margin-top:-20px;opacity:1;visibility:visible;`;
                imageElement.classList.add("active");
                if (arrowIcon) arrowIcon.classList.add("rotated");
            }
        });
    });
});
