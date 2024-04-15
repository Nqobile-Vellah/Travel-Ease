document.addEventListener('DOMContentLoaded', function() {
  
// Navbar Scroll Animation
let lastScrollY = 0;
const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && currentScrollY > navbarHeight) {
    navbar.style.transition = 'top 0.3s'; 
    navbar.style.top = `-${navbarHeight}px`;
  } else {
    navbar.style.transition = 'top 0.3s'; 
    navbar.style.top = '40px'; 
  }
  lastScrollY = currentScrollY;
});

});
