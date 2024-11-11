export function initHeaderIndicator() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-btn");

  function setActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 150 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  setActiveLink();
  window.addEventListener("scroll", setActiveLink);
}
