const loadAboutPage = () => {
  // Reset the hero content
  const heroContent = document.getElementById("hero-content");
  heroContent.innerHTML = "";

  // prepare main content section
  const mainContent = document.getElementById("content");
  mainContent.innerHTML = "";

  const sectionHeadingDiv = document.createElement("div");
  mainContent.appendChild(sectionHeadingDiv);

  const sectionHeading = document.createElement("h1");
  sectionHeading.textContent = "About Us";
  sectionHeadingDiv.appendChild(sectionHeading);
};

export default loadAboutPage;
