import homePageBgImage from "../image/homepage-background.jpg";

const loadHomePage = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const bgImgEle = document.createElement("img");
  bgImgEle.src = homePageBgImage;
  bgImgEle.alt = "A cozy view of the restaurant";
  bgImgEle.classList.add("background-image");

  content.appendChild(bgImgEle);
};

export default loadHomePage;
