  export const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const navbar = document.querySelector('.navbar');
  
    if (navbar) {
      navbar.style.backgroundColor = scrollPosition > 30 ? 'rgb(15 15 15 / 98%)' : 'rgb(0 0 0 / 20%)';
    }
  };
  
  export const setupScrollListener = () => {
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };