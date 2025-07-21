// Typing animation
const typeTarget = document.getElementById("typewriter");
const words = ["Ardhaya Johari", "a Full Stack Developer", "a Creative Coder"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const word = words[wordIndex];
  const current = isDeleting
    ? word.substring(0, charIndex--)
    : word.substring(0, charIndex++);

  typeTarget.textContent = current;

  if (!isDeleting && charIndex === word.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 60 : 100);
  }
}
type();

// Dark Mode Toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
