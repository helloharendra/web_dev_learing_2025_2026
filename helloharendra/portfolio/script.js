(function () {
  "use strict";

  // ---- cursor glow effect ----
  const cursorGlow = document.querySelector(".cursor-glow");
  if (cursorGlow) {
    document.addEventListener("mousemove", (e) => {
      cursorGlow.style.left = e.clientX + "px";
      cursorGlow.style.top = e.clientY + "px";
    });
  }

  // ---- mobile menu ----
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileNav.classList.toggle("active");
      const icon = menuBtn.querySelector("i");
      if (mobileNav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });

    // close on link click
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      });
    });
  }

  // ---- populate skills cloud (floating tags) ----
  const skills = [
    "Python",
    "JavaScript",
    "TypeScript",
    "Dart",
    "Java",
    "C++",
    "HTML",
    "CSS",
    "Flutter",
    "FastAPI",
    "Django",
    "React",
    "Next.js",
    "Spring Boot",
    "ML",
    "Deep Learning",
    "Data Analysis",
    "Data Science",
    "Firebase",
    "Supabase",
    "PostgreSQL",
    "MongoDB",
    "SQL",
    "Git",
    "Docker",
    "Figma",
  ];
  const cloud = document.getElementById("skillsCloud");
  if (cloud) {
    cloud.innerHTML = ""; // clear if any placeholder
    skills.forEach((skill) => {
      const tag = document.createElement("span");
      tag.className = "skill-tag";
      tag.textContent = skill;
      cloud.appendChild(tag);
    });
  }

  // ---- major projects (from your list) ----
  const projects = [
    {
      name: "HRQuill",
      desc: "HR Management System",
      tech: ["React", "Node", "SQL"],
    },
    {
      name: "I-Eat",
      desc: "Food Delivery System",
      tech: ["Flutter", "Firebase"],
    },
    {
      name: "Nature Farm",
      desc: "Milk Delivery System",
      tech: ["Flutter", "Node"],
    },
    {
      name: "RA PWA",
      desc: "Flutter Progressive Web App",
      tech: ["Flutter", "PWA"],
    },
    {
      name: "Lock Head",
      desc: "Tutorial & streaming platform",
      tech: ["Next.js", "Mongo"],
    },
    {
      name: "Monosage.io",
      desc: "AI app backend",
      tech: ["FastAPI", "Python", "ML"],
    },
    {
      name: "Monosagemotors.com",
      desc: "Vehicle multivendor e‑commerce",
      tech: ["React", "Django"],
    },
    {
      name: "Farmhouse Bazaar",
      desc: "Hotel booking platform",
      tech: ["Flutter", "Node"],
    },
    { name: "Asian Dental", desc: "Dental e‑commerce", tech: ["React", "SQL"] },
    {
      name: "Spark Match",
      desc: "Dating application",
      tech: ["Flutter", "Firebase"],
    },
    {
      name: "HP Medics",
      desc: "Medical e‑commerce",
      tech: ["Flutter", "Stripe"],
    },
    { name: "HP Yoga", desc: "Yoga application", tech: ["Flutter", "REST"] },
    {
      name: "Apni Angithi",
      desc: "User + Rider + Admin",
      tech: ["Flutter", "Node", "React"],
    },
  ];

  const grid = document.getElementById("projectGrid");
  if (grid) {
    grid.innerHTML = "";
    projects.forEach((p) => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.innerHTML = `
        <div class="project-header"><i class="fas fa-cube"></i></div>
        <div class="project-body">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <div class="project-tech">
            ${p.tech.map((t) => `<span>${t}</span>`).join("")}
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // ---- active nav highlight ----
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-nav a");

  function highlightNav() {
    const scrollY = window.scrollY + 100;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute("id");
      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach((link) => {
          link.classList.remove("active-link");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active-link");
          }
        });
      }
    });
  }

  // inject small style for active-link
  const style = document.createElement("style");
  style.innerHTML = `
    .active-link { color: #2563eb !important; font-weight: 600; }
    .nav-links .active-link::after { width: 100%; }
  `;
  document.head.appendChild(style);

  window.addEventListener("scroll", highlightNav);
  highlightNav();

  // ---- optional: smooth reveal / animation on scroll ----
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(".project-card, .venture-card, .stat-card, .skill-cat")
    .forEach((el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });

  console.log("✨ Harendra’s ultra‑modern portfolio ready");
})();
