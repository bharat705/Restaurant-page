import homePageBgImage from "../image/homepage-background.jpg";

const loadHomePage = () => {
  // Prepare hero content section
  const heroContent = document.getElementById("hero-content");
  heroContent.innerHTML = "";

  const heroH1 = document.createElement("h1");
  const heroH2 = document.createElement("h2");
  const heroP = document.createElement("p");
  const heroOrderBtn = document.createElement("button");

  heroH1.textContent = "ROYAL KITCHEN";
  heroH2.textContent = "Experience the Taste of Royalty";
  heroP.textContent =
    "At Royal Kitchen, we believe dining is more than just a meal—it’s an experience crafted with passion and precision. From the finest ingredients to exquisite presentation, every dish is a celebration of elegance and flavor. Join us for a journey that blends traditional culinary artistry with a touch of modern sophistication. Your royal feast awaits.";
  heroOrderBtn.textContent = "Order Now";

  heroContent.appendChild(heroH1);
  heroContent.appendChild(heroH2);
  heroContent.appendChild(heroP);
  heroContent.appendChild(heroOrderBtn);

  // Prepare Content Section
  const content = document.getElementById("content");
  content.innerHTML = "";
};

export default loadHomePage;
