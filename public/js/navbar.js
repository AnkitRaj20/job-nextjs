document.addEventListener('DOMContentLoaded', function() {
    const toggleMenu = () => {
      const responsiveMenu = document.getElementById('responsive-menu');
      responsiveMenu.classList.toggle('hidden');
    };
  
    const addToggleEvent = () => {
      const menuToggle = document.getElementById('menu-toggle');
      menuToggle.addEventListener('click', toggleMenu);
    };
  
    // Initialize the event listener
    addToggleEvent();
  });
  