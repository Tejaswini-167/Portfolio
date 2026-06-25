/*=========================================
Typing Animation
=========================================*/

const text = [
    "AI & Machine Learning Engineer",
    "Computer Vision Enthusiast",
    "Deep Learning Developer",
    "Reinforcement Learning Explorer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            index = 0;
            count++;

            type();

        }, 1800);

    } else {

        setTimeout(type, 90);

    }

})();


/*=========================================
Mobile Menu
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () => {
    navLinks.classList.toggle("active");
};


/*=========================================
Close menu after click
=========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/*=========================================
Navbar Shadow on Scroll
=========================================*/

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(8,17,31,.92)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(8,17,31,.55)";
        header.style.boxShadow = "none";

    }

});


/*=========================================
Scroll Reveal
=========================================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(".section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


/*=========================================
Scroll To Top Button
=========================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#4F8CFF";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


/*=========================================
Active Navbar Link
=========================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
Skill Card Animation
=========================================*/

const cards = document.querySelectorAll(".skill-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});


/*=========================================
Project Card Tilt
=========================================*/

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 12;
        const rotateX = (0.5 - y / rect.height) * 12;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


/*=========================================
Console Message
=========================================*/

console.log(
"%cWelcome to Tejaswini's Portfolio 🚀",
"color:#4F8CFF;font-size:20px;font-weight:bold;"
);