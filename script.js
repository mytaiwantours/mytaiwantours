
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after selecting a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Automatically update the copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Preselect a tour when a visitor clicks its inquiry link
document.querySelectorAll("[data-tour]").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("tour").value =
      link.dataset.tour;
  });
});

// Demo contact form
document.getElementById("contactForm").addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const tour = document.getElementById("tour").value;
    const message = document.getElementById("message").value.trim();

    const subject = `Tour inquiry: ${tour}`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Tour: ${tour}\n\n` +
      `Message:\n${message}`;

    const result = document.getElementById("formMessage");
    result.textContent =
      "Opening your email app to send your inquiry...";

    const mailto =
      "mailto:YOUR-EMAIL@example.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    window.location.href = mailto;
  }
);
