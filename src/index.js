import "./styles/reset.css";
import "./styles/styles.css";
import "./styles/about.css";
import "./styles/menu.css";
import "./styles/reservations.css";
import "./styles/gallery.css";
import "./styles/blog.css";
import "./styles/contact.css";

import loadHomePage from "./modules/home";
import loadAboutPage from "./modules/about";
import loadMenuPage from "./modules/menu";
import loadReservationsPage from "./modules/reservations";
import loadGalleryPage from "./modules/gallery";
import loadBlogPage from "./modules/blog";
import loadContactPage from "./modules/contact";
import { initHeaderIndicator } from "./modules/header";

const loadAllSections = () => {
  initHeaderIndicator();
  loadHomePage();
  loadAboutPage();
  loadMenuPage();
  loadReservationsPage();
  loadGalleryPage();
  loadBlogPage();
  loadContactPage();
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
    loadBlogPage();
    document
      .getElementById("blog-section")
      .scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("contact-btn").addEventListener("click", () => {
    loadContactPage();
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
