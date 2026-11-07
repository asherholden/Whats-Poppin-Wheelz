
document.documentElement.classList.add("js");


// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.querySelector(".header__toggle");
const nav = document.querySelector(".header__nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");

    const isOpen = nav.classList.contains("is-open");

    menuToggle.setAttribute("aria-expanded", isOpen);
});


// Close menu when clicking a link

document.querySelectorAll(".header__link").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// =========================
// CURRENT YEAR
// =========================

document.querySelector("#year").textContent =
    new Date().getFullYear();


// =========================
// GALLERY LIGHTBOX
// =========================

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const closeButton = document.querySelector(".lightbox__close");

const galleryImages = document.querySelectorAll(".work-card");

galleryImages.forEach(card => {

    card.addEventListener("click", () => {

        const image = card.dataset.image;

        lightboxImage.src = image;

        lightbox.showModal();

    });

});


// Close button

closeButton.addEventListener("click", () => {
    lightbox.close();
});


// Close when clicking outside the image

lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {
        lightbox.close();
    }

});


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".section-heading, .service-card, .work-card, .about__content, .about__art, .contact__inner"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});
