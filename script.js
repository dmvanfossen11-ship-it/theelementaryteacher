function toggleMenu() {
  const links = document.getElementById("navLinks");
  links.classList.toggle("open");
}

// Optional: visually mark active nav pill on click
document.addEventListener("click", (e) => {
  const a = e.target.closest(".pill");
  if (!a) return;

  document.querySelectorAll(".pill").forEach((p) => p.classList.remove("active"));
  a.classList.add("active");

  // close mobile menu after selection
  const links = document.getElementById("navLinks");
  links.classList.remove("open");
});

function newsletterSubmit(e) {
  e.preventDefault();
  const email = e.target.email.value.trim();

  // For now: no backend, just a confirmation.
  // Later we can wire this to Mailchimp / ConvertKit / Buttondown, etc.
  alert(`Subscribed: ${email}`);
  e.target.reset();
}

document.getElementById("year").textContent = new Date().getFullYear();
