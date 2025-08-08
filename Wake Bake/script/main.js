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



