// Highlight active navigation link automatically
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Contact form submit message
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    form.reset();
  });
}
