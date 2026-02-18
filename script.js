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
