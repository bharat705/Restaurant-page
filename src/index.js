import "./reset.css";
import "./about.css";
import "./styles.css";

import loadHomePage from "./modules/home";
import loadAboutPage from "./modules/about";

document.getElementById("home-btn").addEventListener("click", loadHomePage);
document.getElementById("about-btn").addEventListener("click", loadAboutPage);
