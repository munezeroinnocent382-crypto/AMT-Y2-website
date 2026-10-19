// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


// ==============================
// CURRENT YEAR
// ==============================

document.getElementById("year").textContent = new Date().getFullYear();


// ==============================
// SIMPLE SCROLL ANIMATION
// ==============================

const cards = document.querySelectorAll(
    ".course-card, .machine, .student, .stat-card"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold: 0.15
    }
);

cards.forEach(card => {
    observer.observe(card);
});