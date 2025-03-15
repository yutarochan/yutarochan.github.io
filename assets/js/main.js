document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Animation on scroll
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  function checkScroll() {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    
    animatedElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top + scrollY;
      
      if (scrollY > elementPosition - windowHeight + 100) {
        element.classList.add('visible');
      }
    });
  }
  
  if (animatedElements.length) {
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
  }
});