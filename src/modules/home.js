const loadHomePage = () => {
  const homeSection = document.getElementById("home-section");
  homeSection.innerHTML = ""; // Clear any existing content

  // Home Section Content
  homeSection.innerHTML = `
    <div class="hero-content">
      <h1>ROYAL KITCHEN</h1>
      <h2>Experience the Taste of Royalty</h2>
      <p>At Royal Kitchen, we believe dining is more than just a meal—it’s an experience crafted with passion and precision. From the finest ingredients to exquisite presentation, every dish is a celebration of elegance and flavor. Join us for a journey that blends traditional culinary artistry with a touch of modern sophistication. Your royal feast awaits.</p>
      <button>Order Now</button>
    </div>
  `;
};

export default loadHomePage;
