//import images
import dish1 from "../image/dish1.jpg";
import dish2 from "../image/dish2.jpg";
import dish3 from "../image/dish3.jpg";
import dish4 from "../image/dish4.jpg";
import dish5 from "../image/dish5.jpg";
import dish6 from "../image/dish6.jpg";
import dish7 from "../image/dish7.jpg";
import dish8 from "../image/dish8.jpg";
import dish9 from "../image/dish9.jpg";
import dish10 from "../image/dish10.jpg";

const galleryItems = [
  {
    src: dish1,
    title: "Exquisite Appetizer",
    description: "A delightful start to your meal.",
  },
  {
    src: dish2,
    title: "Signature Pasta",
    description: "Handcrafted pasta with rich sauce.",
  },
  {
    src: dish3,
    title: "Gourmet Burger",
    description: "Perfectly grilled burger with fresh toppings.",
  },
  {
    src: dish4,
    title: "Elegant Dessert",
    description: "A sweet finish to your dining experience.",
  },
  {
    src: dish5,
    title: "Premium Steak",
    description: "Juicy steak cooked to perfection.",
  },
  {
    src: dish6,
    title: "Fresh Salad",
    description: "A refreshing mix of greens and flavors.",
  },
  {
    src: dish7,
    title: "Seafood Delight",
    description: "A selection of the finest seafood.",
  },
  {
    src: dish8,
    title: "Craft Cocktails",
    description: "Unique cocktails crafted with care.",
  },
  {
    src: dish9,
    title: "Decadent Chocolate",
    description: "Rich chocolate dessert for indulgence.",
  },
  {
    src: dish10,
    title: "Cheese Platter",
    description: "A variety of fine cheeses to enjoy.",
  },
];

const loadGalleryPage = () => {
  const gallerySection = document.getElementById("gallery-section");
  gallerySection.innerHTML = ""; // Clear any existing content

  // Create a heading for the gallery section
  const heading = document.createElement("h2");
  heading.classList.add("gallery-heading");
  heading.textContent = "Our Gallery";

  // Create a container for the gallery grid
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("gallery-grid");

  // Generate each gallery item as a card
  galleryItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("gallery-card");

    card.innerHTML = `
      <img src="${item.src}" alt="${item.title}" class="gallery-image" />
      <div class="gallery-overlay">
        <h3 class="gallery-title">${item.title}</h3>
        <p class="gallery-description">${item.description}</p>
      </div>
    `;

    gridContainer.appendChild(card);
  });

  gallerySection.appendChild(heading);
  gallerySection.appendChild(gridContainer);
};

export default loadGalleryPage;
