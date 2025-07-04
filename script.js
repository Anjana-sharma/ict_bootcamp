 const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show button after scrolling down 300px
    window.onscroll = function() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };

    // Scroll smoothly to top when clicked
    scrollToTopBtn.onclick = function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };


    // Toggle menu on mobile
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  
});
