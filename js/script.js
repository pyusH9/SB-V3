document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");
    const cards = document.querySelectorAll(".card");

    if (!modal || !modalTitle || !modalText || !modalImg) return;

    /* ==========================
       OPEN MODAL
    ========================== */
    cards.forEach(function (card) {
        card.addEventListener("click", function () {

            const img = card.querySelector("img");
            if (!img) return;

            modalTitle.textContent = card.dataset.title || "";
            modalText.textContent = card.dataset.content || "";
            modalImg.src = img.src;
            modalImg.alt = img.alt || "";

            modal.classList.add("show");
            document.body.classList.add("modal-open");
        });
    });

    /* ==========================
       CLOSE MODAL
    ========================== */
    function closeModal() {
        modal.classList.remove("show");
        document.body.classList.remove("modal-open");

        // Clear image after animation
        setTimeout(function () {
            modalImg.src = "";
        }, 200);
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });

    /* ==========================
       FADE-IN ON SCROLL
    ========================== */
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    cards.forEach(function (card) {
        observer.observe(card);
    });

});
