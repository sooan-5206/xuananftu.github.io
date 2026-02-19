const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ===== VOLUNTEER TAB FILTER =====

const tabs = document.querySelectorAll(".tab");
const groups = document.querySelectorAll(".volunteer-group");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // remove active tab
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.getAttribute("data-category");

    groups.forEach(group => {
      if (group.getAttribute("data-category") === category) {
        group.classList.add("active");
      } else {
        group.classList.remove("active");
      }
    });
  });
});

// mặc định hiển thị FTU
document.querySelector('.volunteer-group[data-category="ftu"]').classList.add("active");
