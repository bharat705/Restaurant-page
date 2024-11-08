const loadAboutPage = () => {
  // Reset the hero content
  const hero = document.getElementById("hero");
  const heroContent = document.getElementById("hero-content");
  heroContent.innerHTML = "";
  hero.style.display = "none";

  // Prepare main content section
  const mainContent = document.getElementById("content");
  mainContent.innerHTML = "";
  mainContent.className = "about-page";

  // Dynamically load styles.css
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "../about.css";
  document.head.appendChild(link);

  // Calculate header height dynamically and apply it as a top margin
  const header = document.getElementById("header");
  const headerHeight = header.offsetHeight;
  mainContent.style.marginTop = `${headerHeight}px`;

  const sectionHeadingDiv = document.createElement("div");
  sectionHeadingDiv.classList.add("section-heading");
  mainContent.appendChild(sectionHeadingDiv);

  const sectionHeading = document.createElement("h1");
  sectionHeading.textContent = "About Us";
  sectionHeadingDiv.appendChild(sectionHeading);

  const welcomeMessageDiv = document.createElement("div");
  welcomeMessageDiv.classList.add("welcome-section");
  mainContent.appendChild(welcomeMessageDiv);

  const welcomeMessageHead = document.createElement("h3");
  welcomeMessageHead.textContent =
    "Welcome to Royal Kitchen – Where Elegance Meets Flavor.";
  const welcomeMessageText = document.createElement("p");
  welcomeMessageText.textContent =
    "At Royal Kitchen, we believe that dining is not just about food; it’s an art form that delights all the senses. Founded on the principles of quality, creativity, and sustainability, our restaurant has earned a reputation for offering an exceptional culinary experience that celebrates both tradition and innovation.";
  welcomeMessageDiv.appendChild(welcomeMessageHead);
  welcomeMessageDiv.appendChild(welcomeMessageText);

  const philosophyDiv = document.createElement("div");
  mainContent.appendChild(philosophyDiv);
  const philosophyHead = document.createElement("h2");
  philosophyHead.textContent = "Our Philosophy";
  philosophyDiv.appendChild(philosophyHead);

  const philosophyText = document.createElement("p");
  philosophyText.textContent =
    "We view every dish as a masterpiece crafted to inspire. From the moment you step into Royal Kitchen, you’re immersed in an ambiance that’s as sophisticated as it is welcoming. Our philosophy is simple: to bring joy and elegance to each meal, whether you’re dining with us in person or savoring our offerings at home.";
  philosophyDiv.appendChild(philosophyText);

  const featuresDiv = document.createElement("div");
  mainContent.appendChild(featuresDiv);
  const featuresHead = document.createElement("h2");
  featuresHead.textContent = "Our Features";
  featuresDiv.appendChild(featuresHead);

  const featuresGridsParent = document.createElement("div");
  featuresGridsParent.classList.add("features-grid");
  featuresDiv.appendChild(featuresGridsParent);

  // Define feature sections
  const features = [
    {
      title: "Gourmet Ingredients",
      description:
        "We source only the finest ingredients, handpicked from local farms and trusted suppliers across the globe. Our commitment to freshness and quality ensures that every bite at Royal Kitchen is an experience of true culinary craftsmanship.",
    },
    {
      title: "Our Culinary Team",
      description:
        "Royal Kitchen’s culinary team is led by some of the most talented chefs in the industry, each bringing a unique touch to our signature dishes. Every dish is a tribute to the art of fine dining.",
    },
    {
      title: "A Commitment to Sustainability",
      description:
        "We are dedicated to making choices that protect our planet. From using sustainable ingredients to eco-friendly packaging, we strive to minimize our environmental footprint.",
    },
    {
      title: "A Seamless Experience",
      description:
        "Our carefully designed online ordering system allows you to enjoy the sophistication of Royal Kitchen wherever you are, with just a few clicks.",
    },
  ];

  // Generate feature items
  features.forEach((feature) => {
    const featureDiv = document.createElement("div");
    const featureHead = document.createElement("h3");
    const featureText = document.createElement("p");
    featureHead.textContent = feature.title;
    featureText.textContent = feature.description;
    featureDiv.appendChild(featureHead);
    featureDiv.appendChild(featureText);
    featuresGridsParent.appendChild(featureDiv);
  });

  const inviteSectionDiv = document.createElement("div");
  inviteSectionDiv.classList.add("invite-section");
  mainContent.appendChild(inviteSectionDiv);

  const inviteSectionHead = document.createElement("h2");
  inviteSectionHead.textContent = "Experience the Essence of Royal Dining.";
  inviteSectionDiv.appendChild(inviteSectionHead);

  const inviteSectionText = document.createElement("p");
  inviteSectionText.textContent =
    "Royal Kitchen invites you to join us in a culinary journey that is as enriching as it is flavorful. Whether you’re a connoisseur or simply seeking a memorable meal, we are here to make every moment extraordinary.";
  inviteSectionDiv.appendChild(inviteSectionText);
};

export default loadAboutPage;
