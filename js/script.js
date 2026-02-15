document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");
    const cards = document.querySelectorAll(".card");

    /* ==========================
       OPEN MODAL
    ========================== */
    cards.forEach(card => {
        card.addEventListener("click", () => {

            const img = card.querySelector("img");

            modalTitle.textContent = card.dataset.title;
            modalText.textContent = card.dataset.content;
            modalImg.src = img.src;
            modalImg.alt = img.alt;

            modal.style.display = "block";
            document.body.classList.add("modal-open");
        });
    });

    /* ==========================
       CLOSE MODAL
    ========================== */
    function closeModal() {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        modalImg.src = "";
    }

    closeBtn.addEventListener("click", closeModal);

    window.addEventListener("click", e => {
        if (e.target === modal) {
            closeModal();
        }
    });

    window.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            closeModal();
        }
    });

    /* ==========================
       FADE-IN ON SCROLL
    ========================== */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    cards.forEach(card => {
        observer.observe(card);
    });

});
