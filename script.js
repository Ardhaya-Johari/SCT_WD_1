window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = Math.ceil(target / speed);
    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
