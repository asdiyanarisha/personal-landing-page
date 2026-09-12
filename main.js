/* ============================================
   DATA — Risha Asdiyana Personal Data
============================================ */

const DATA = {
    skills: [
        { name: "Golang", point: 90, img: "assets/personal-web/go-gopher.svg" },
        { name: "Python", point: 85, img: "assets/personal-web/python.svg" },
        { name: "PHP", point: 85, img: "assets/personal-web/PHP-logo.svg" },
        { name: "NodeJs", point: 75, img: "assets/personal-web/nodejs-icon.svg" },
        { name: "Java", point: 75, img: "assets/personal-web/java-icon.svg" },
        { name: "MySQL", point: 75, img: "assets/personal-web/mysql.svg" },
        { name: "PostgreSQL", point: 75, img: "assets/personal-web/postgresql.svg" },
        { name: "Docker", point: 85, img: "assets/personal-web/docker.svg" },
        { name: "MongoDB", point: 80, img: "assets/personal-web/mongodb.svg" },
    ],

    companies: [
        {
            logo: "assets/personal-web/Komerce.svg",
            name: "Komerce",
            role: "Senior Backend Engineer",
            period: "Dec 2022 – Present",
        },
        {
            logo: "assets/personal-web/perveks.svg",
            name: "Perveks",
            role: "Freelance Backend Engineer",
            period: "Feb 2023 – May 2023",
        },
        {
            logo: "assets/personal-web/atmatech.svg",
            name: "Atmatech",
            role: "Software Engineer",
            period: "Sept 2018 – Nov 2022",
        },
        {
            logo: "assets/personal-web/ebdesk.svg",
            name: "Ebdesk Teknologi",
            role: "Software Engineer",
            period: "Jun 2016 – Aug 2018",
        },
    ],

    works: [
        {
            period: "2022 — Present",
            role: "Senior Backend Engineer",
            company: "PT Kampung Marketeer Berdaya (Komerce)",
            url: "https://komerce.id/en",
            description: "Design, build and maintain backend application of Komcards, a virtual debit card solution for online business trusted by more than 14,700 users. Participated in the architectural transformation of Komship, shifting from a monolith to a microservices ecosystem. Conducted sharing sessions on competitive programming to upskill the engineering team.",
            skills: ["Go", "NodeJs", "MySQL", "RabbitMQ", "Laravel", "MongoDB", "Elastic Search", "Redis", "PostgreSQL"],
        },
        {
            period: "Feb – May 2023",
            role: "Freelance Backend Engineer",
            company: "Perveks",
            url: "https://perveks.com/",
            description: "Appointed to analyze OCR technology and create a functional PoC that highlights its capabilities and limitations.",
            skills: ["Go", "PostgreSQL", "GCP", "Tesseract", "OCR", "Google Vertex AI", "Google Cloud Vision"],
        },
        {
            period: "2020 — 2021",
            role: "Freelance Fullstack Engineer",
            company: "Rasabaik",
            url: "https://fayonapp.id/login",
            description: "Designed and implemented an ERP system for clients, integrating product management, warehouse management, order tracking, and accounting features.",
            skills: ["Laravel", "PHP", "MongoDB", "Python", "Ajax", "Bootstrap"],
        },
        {
            period: "2018 — 2022",
            role: "Data Engineer (Crawler Engineer)",
            company: "PT Atmatech Global Informatika",
            url: "https://netray.id/",
            description: "Developed and maintained a data scraping engine to collect real-time data from various social media and online news sources to support large-scale media monitoring applications.",
            skills: ["Python", "Java", "Scala", "MongoDB", "RabbitMQ", "Flask", "Selenium", "Elastic Search", "Celery"],
        },
        {
            period: "2016 — 2018",
            role: "Software Engineer",
            company: "PT Ebdesk Teknologi (Indonesia Indicator)",
            url: "https://indonesiaindicator.com/who-we-are",
            description: "Build tool to daily operational media monitoring application with python and make sure the application running well. Installing and maintaining existing product application in client side such as Polri, BIN and BNPT.",
            skills: ["Python", "Solr", "NSQ", "Beanstalkd", "MySQL"],
        },
    ],

    typedRoles: [
        "Senior Backend Engineer",
        "Go & Python Enthusiast",
        "Distributed Systems Builder",
        "Open Source Contributor",
        "Performance Optimizer",
    ],
};

/* ============================================
   CURSOR GLOW
============================================ */
const cursorGlow = document.getElementById("cursorGlow");
let mouseX = 0, mouseY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorGlow.style.left = mouseX + "px";
    cursorGlow.style.top = mouseY + "px";
});

/* ============================================
   NAVBAR SCROLL + ACTIVE LINK
============================================ */
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Active nav link
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.dataset.section === current) {
            link.classList.add("active");
        }
    });
});

/* ============================================
   MOBILE NAV TOGGLE
============================================ */
const navToggle = document.getElementById("navToggle");
const navLinksEl = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
    navLinksEl.classList.toggle("open");
    const spans = navToggle.querySelectorAll("span");
    if (navLinksEl.classList.contains("open")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
        spans[0].style.transform = "";
        spans[1].style.opacity = "";
        spans[2].style.transform = "";
    }
});

// Close mobile nav on link click
navLinksEl.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        navLinksEl.classList.remove("open");
        const spans = navToggle.querySelectorAll("span");
        spans[0].style.transform = "";
        spans[1].style.opacity = "";
        spans[2].style.transform = "";
    });
});

/* ============================================
   TYPED TEXT EFFECT
============================================ */
const typedEl = document.getElementById("typedText");
let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;
let typingSpeed = 80;

function typeEffect() {
    const currentRole = DATA.typedRoles[roleIdx];
    if (isDeleting) {
        typedEl.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        typingSpeed = 40;
    } else {
        typedEl.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        typingSpeed = 80;
    }

    if (!isDeleting && charIdx === currentRole.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % DATA.typedRoles.length;
        typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
}

setTimeout(typeEffect, 1000);

/* ============================================
   COUNTER ANIMATION
============================================ */
function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 2000;
    const start = Date.now();

    function update() {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(eased * target);
        el.textContent = target >= 1000 ? value.toLocaleString() : value;
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

/* ============================================
   INTERSECTION OBSERVER
============================================ */
const observerOptions = { threshold: 0.15 };

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Skill bars
const skillBarObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const bar = entry.target.querySelector(".skill-bar");
            const pct = bar.dataset.pct;
            setTimeout(() => {
                bar.style.transform = `scaleX(${pct / 100})`;
            }, 100);
            skillBarObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

// Counter observer
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-target]").forEach(animateCounter);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

/* ============================================
   RENDER COMPANIES
============================================ */
function renderCompanies() {
    const grid = document.getElementById("companiesGrid");
    DATA.companies.forEach((c, i) => {
        const card = document.createElement("div");
        card.className = "company-card reveal";
        card.style.transitionDelay = `${i * 0.1}s`;
        card.innerHTML = `
            <div class="company-logo-wrap">
                <img src="${c.logo}" alt="${c.name} logo" />
            </div>
            <div class="company-info">
                <div class="company-name">${c.name}</div>
                <div class="company-role">${c.role}</div>
            </div>
            <div class="company-period">${c.period}</div>
        `;
        grid.appendChild(card);
        revealObserver.observe(card);
    });
}

/* ============================================
   RENDER SKILLS
============================================ */
function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    DATA.skills.forEach((s, i) => {
        const card = document.createElement("div");
        card.className = "skill-card reveal";
        card.style.transitionDelay = `${i * 0.07}s`;
        card.innerHTML = `
            <div class="skill-icon">
                <img src="${s.img}" alt="${s.name}" />
            </div>
            <div class="skill-name">${s.name}</div>
            <div class="skill-bar-wrap">
                <div class="skill-bar" data-pct="${s.point}"></div>
            </div>
            <div class="skill-point">${s.point}%</div>
        `;
        grid.appendChild(card);
        revealObserver.observe(card);
        skillBarObserver.observe(card);
    });
}

/* ============================================
   RENDER TIMELINE
============================================ */
function renderTimeline() {
    const timeline = document.getElementById("timeline");
    DATA.works.forEach((work, i) => {
        const item = document.createElement("div");
        item.className = "timeline-item";
        item.style.transitionDelay = `${i * 0.15}s`;

        const skillsHTML = work.skills
            .map((s) => `<span class="skill-tag">${s}</span>`)
            .join("");

        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-card">
                <div class="timeline-period">${work.period}</div>
                <div class="timeline-title">${work.role}</div>
                <div class="timeline-company">
                    <a href="${work.url}" target="_blank" rel="noopener noreferrer">${work.company} ↗</a>
                </div>
                <p class="timeline-desc">${work.description}</p>
                <div class="timeline-skills">${skillsHTML}</div>
            </div>
        `;
        timeline.appendChild(item);

        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    timelineObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        timelineObserver.observe(item);
    });
}

/* ============================================
   HERO STATS — observe & animate
============================================ */
const heroStats = document.querySelector(".hero-stats");
if (heroStats) {
    counterObserver.observe(heroStats);
}

/* ============================================
   REVEAL generic sections
============================================ */
function initReveal() {
    document.querySelectorAll(".section-header, .about-text, .about-companies, .contact-text, .contact-links").forEach((el) => {
        el.classList.add("reveal");
        revealObserver.observe(el);
    });
}

/* ============================================
   FOOTER YEAR
============================================ */
document.getElementById("year").textContent = new Date().getFullYear();

/* ============================================
   INIT
============================================ */
document.addEventListener("DOMContentLoaded", () => {
    renderCompanies();
    renderSkills();
    renderTimeline();
    initReveal();
});
