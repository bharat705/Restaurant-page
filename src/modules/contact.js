const loadContactPage = () => {
  const contactSection = document.getElementById("contact-section");
  contactSection.innerHTML = ""; // Clear any existing content

  // Four-column footer layout with Royal Kitchen branding
  contactSection.innerHTML = `
    <div class="footer-container">
      <div class="footer-column">
        <h3 class="footer-heading">Royal Kitchen</h3>
        <p>© 2024 Royal Kitchen</p>
        <p class="social-heading">Connect With Us</p>
        <div class="social-icons">
          <a href="https://facebook.com" class="social-icon" aria-label="Facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://x.com" class="social-icon" aria-label="Twitter" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://instagram.com" class="social-icon" aria-label="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://github.com/bharat705" class="social-icon" aria-label="GitHub" target="_blank"><i class="fab fa-github"></i></a>
        </div>
      </div>
      <div class="footer-column">
        <h3 class="footer-heading">Explore</h3>
        <p><a href="#">Home</a></p>
        <p><a href="#">Our Story</a></p>
        <p><a href="#">Menu</a></p>
        <p><a href="#">Reservations</a></p>
      </div>
      <div class="footer-column">
        <h3 class="footer-heading">Experience</h3>
        <p><a href="#">Dining Experience</a></p>
        <p><a href="#">Private Events</a></p>
        <p><a href="#">Chef’s Specials</a></p>
        <p><a href="#">Gift Cards</a></p>
      </div>
      <div class="footer-column">
        <h3 class="footer-heading">Contact Us</h3>
        <p>+123 456 789</p>
        <p><a href="#">Get Directions</a></p>
        <p>info@royalkitchen.com</p>
        <p>1234 Gourmet Ave, Food City, CA</p>
      </div>
    </div>
  `;
};

export default loadContactPage;
