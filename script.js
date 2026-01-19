function toggleMenu() {
  const el = document.getElementById("navLinks");
  el.classList.toggle("open");
}

function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // IMPORTANT: change this to your email address
  const to = "you@example.com";

  const subject = encodeURIComponent(`Message from ${name} (theelementaryteacher)`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}

document.getElementById("year").textContent = new Date().getFullYear();
