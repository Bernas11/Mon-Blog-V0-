// Fade-in with Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');
  const options = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach(fader => observer.observe(fader));

  // Slideshow
  const slides = document.getElementById('slides');
  const images = slides.querySelectorAll('img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let index = 0;

  function showSlide(i){
    if(i < 0) index = images.length - 1;
    else if(i >= images.length) index = 0;
    else index = i;
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  prevBtn.addEventListener('click', () => showSlide(index - 1));
  nextBtn.addEventListener('click', () => showSlide(index + 1));

  setInterval(() => showSlide(index + 1), 6000);

  // Show first slide on load
  showSlide(0);

  // Navbar active link highlight on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if(window.pageYOffset >= sectionTop){
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('text-secondary');
      if(link.getAttribute('href') === '#' + current){
        link.classList.add('text-secondary');
      }
    });
  });
});
