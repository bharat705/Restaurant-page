import "./reset.css";
import "./styles.css";
import "./about.css";
import "./menu.css";
import "./reservations.css";
import "./gallery.css";

import loadHomePage from "./modules/home";
import loadAboutPage from "./modules/about";
import loadMenuPage from "./modules/menu";
import loadReservationsPage from "./modules/reservations";
import loadGalleryPage from "./modules/gallery";

const loadAllSections = () => {
  loadHomePage();
  loadAboutPage();
  loadMenuPage();
  loadReservationsPage();
  loadGalleryPage();
};

document.addEventListener("DOMContentLoaded", () => {
  // Load all sections on DOMContentLoaded
  loadAllSections();
  // Smooth scrolling for navigation buttons

  document.getElementById("header-logo").addEventListener("click", () => {
    loadHomePage();
    document
      .getElementById("home-section")
      .scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("home-btn").addEventListener("click", () => {
    loadHomePage();
    document
      .getElementById("home-section")
      .scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("about-btn").addEventListener("click", () => {
    loadAboutPage();
    document
      .getElementById("about-section")
      .scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("menu-btn").addEventListener("click", () => {
    loadMenuPage();
    document
      .getElementById("menu-section")
      .scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("reservations-btn").addEventListener("click", () => {
    loadReservationsPage();
    document
      .getElementById("reservations-section")
      .scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("gallery-btn").addEventListener("click", () => {
    loadGalleryPage();
    document
      .getElementById("gallery-section")
      .scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("blog-btn").addEventListener("click", () => {
    document
      .getElementById("blog-section")
      .scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("contact-btn").addEventListener("click", () => {
    document
      .getElementById("contact-section")
      .scrollIntoView({ behavior: "smooth" });
  });

  const header = document.getElementById("header");
  console.log(header);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      // Adjust this value to change when the header background appears
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });
});
