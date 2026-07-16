document.querySelectorAll('[data-target]').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const section = document.getElementById(
            this.dataset.target
        );

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    });

});

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    menuToggle.textContent = navMenu.classList.contains("active")
        ? "✕ Fermer"
        : "☰ Menu";
});

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰ Menu";
    });
});
