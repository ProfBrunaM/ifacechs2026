/* ============================================================
   JAVASCRIPT
   Este arquivo está preparado para pequenas interações.
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    // Animação simples de entrada dos cards quando aparecem na tela.
    const cards = document.querySelectorAll(".project-card, .link-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08
    });

    cards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity .5s ease, transform .5s ease";
        observer.observe(card);
    });

});
