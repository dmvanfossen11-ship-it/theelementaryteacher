function toggleMenu() {
  const links = document.getElementById("navLinks");
  if (!links) return;
  links.classList.toggle("open");
}

// FAQ accordion (used on app.html)
function toggleAcc(btn) {
  btn.classList.toggle("open");
  const panel = btn.nextElementSibling;
  if (!panel) return;
  const open = panel.style.display === "block";
  panel.style.display = open ? "none" : "block";
}

// YouTube category filtering (used on youtube.html)
(function initYouTubeFilters() {
  const grid = document.getElementById("videoGrid");
  const pills = document.querySelectorAll(".filter-pill");
  if (!grid || pills.length === 0) return;

  const cards = Array.from(grid.querySelectorAll(".video-card"));

  function applyFilter(value) {
    cards.forEach((card) => {
      const cat = card.getAttribute("data-category") || "";
      const show = value === "all" || cat === value;
      card.style.display = show ? "" : "none";
    });
  }

  pills.forEach((p) => {
    p.addEventListener("click", () => {
      pills.forEach((x) => x.classList.remove("active"));
      p.classList.add("active");
      applyFilter(p.getAttribute("data-filter"));
    });
  });
})();

// Close mobile nav when clicking a link
document.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (!a) return;
  const links = document.getElementById("navLinks");
  if (links) links.classList.remove("open");
});

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
(function initWorkFilters() {
  const grid = document.getElementById("workGrid");
  const pills = document.querySelectorAll(".work-filter-row .filter-pill");
  if (!grid || pills.length === 0) return;

  const cards = Array.from(grid.querySelectorAll(".work-card"));

  function applyFilter(value) {
    cards.forEach((card) => {
      const cat = card.getAttribute("data-category") || "";
      const show = value === "all" || cat === value;
      card.style.display = show ? "" : "none";
    });
  }

  pills.forEach((p) => {
    p.addEventListener("click", () => {
      pills.forEach((x) => x.classList.remove("active"));
      p.classList.add("active");
      applyFilter(p.getAttribute("data-filter"));
    });
  });
})();
