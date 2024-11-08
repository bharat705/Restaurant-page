import "./reset.css";
import "./styles.css";
import "./about.css";

import loadHomePage from "./modules/home";
import loadAboutPage from "./modules/about";

document.getElementById("home-btn").addEventListener("click", loadHomePage);
document.getElementById("about-btn").addEventListener("click", loadAboutPage);
