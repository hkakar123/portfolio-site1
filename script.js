'use strict';

// Initialize AOS (animate-on-scroll)
AOS.init({
  duration: 800,
  easing: 'ease-out-quart',
  once: true,
  offset: 80
});

/* Typing effect for skill rotator */
(function typingRotator() {
  const SKILLS = [
    "Full-Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "Data Science",
    "AI / ML",
    "Tailwind",
    "Jest",
    "JWT"
  ];
  const el = document.getElementById('skill-rotator');
  if (!el) return;

  let skillIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingSpeed = 100;   // ms per char
  const deletingSpeed = 60;  // ms per char
  const delayBetween = 1200; // pause before deleting when a word is complete

  function type() {
    const current = SKILLS[skillIndex];

    if (!isDeleting) {
      // Typing forward
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(type, delayBetween);
        return;
      }
    } else {
      // Deleting
      if (charIndex > 0) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % SKILLS.length;
      }
    }
    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }

  type();
})();

/* Handle broken images gracefully */
window.addEventListener('error', function (e) {
  if (e.target && e.target.tagName === 'IMG') {
    const img = e.target;
    img.style.filter = 'grayscale(100%)';
    img.style.opacity = '0.8';
  }
}, true);
