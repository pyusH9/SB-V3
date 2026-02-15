// Modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        modal.style.display = "block";
        modalTitle.innerText = card.dataset.title;
        modalText.innerText = card.dataset.content;
        const img = card.querySelector("img");
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => { modal.style.display = "none"; });
window.addEventListener("click", e => { if(e.target === modal){ modal.style.display = "none"; }});

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".card").forEach(card => { observer.observe(card); });
