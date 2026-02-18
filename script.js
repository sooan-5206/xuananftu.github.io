const toggle = document.getElementById("toggle-theme");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const items = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("show");
    }
  });
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Tự đóng menu khi bấm link (mobile)
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
