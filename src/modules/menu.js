const menuItems = [
  {
    name: "Spaghetti Carbonara",
    description: "Classic Italian pasta with creamy sauce and pancetta.",
    price: "$12.99",
    image: "../image/spaghetti.jpg",
  },
  {
    name: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, and basil on a thin crust.",
    price: "$10.99",
    image: "../image/pizza.jpg",
  },
  {
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with Caesar dressing and croutons.",
    price: "$8.99",
    image: "../image/caesar_salad.jpg",
  },
  {
    name: "Grilled Salmon",
    description: "Perfectly grilled salmon with lemon butter sauce.",
    price: "$15.99",
    image: "../image/salmon.jpg",
  },
  {
    name: "Ribeye Steak",
    description: "Juicy ribeye steak cooked to perfection.",
    price: "$19.99",
    image: "../image/steak.jpg",
  },
  {
    name: "Tiramisu",
    description: "Traditional Italian dessert with coffee and mascarpone.",
    price: "$6.99",
    image: "../image/tiramisu.jpg",
  },
  {
    name: "Chicken Alfredo",
    description:
      "Fettuccine pasta with creamy Alfredo sauce and grilled chicken.",
    price: "$13.99",
    image: "../image/alfredo.jpg",
  },
  {
    name: "French Onion Soup",
    description: "Rich beef broth with caramelized onions and melted cheese.",
    price: "$7.99",
    image: "../image/french_onion_soup.jpg",
  },
  {
    name: "Shrimp Scampi",
    description: "Succulent shrimp sautéed in garlic butter and white wine.",
    price: "$14.99",
    image: "../image/scampi.jpg",
  },
  {
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey molten center.",
    price: "$5.99",
    image: "../image/lava_cake.jpg",
  },
];

const loadMenuPage = () => {
  const menuSection = document.getElementById("menu-section");
  menuSection.innerHTML = ""; // Clear any existing content

  // Create a container for the menu items grid
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("menu-grid");

  // Generate each menu item as a card
  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="menu-item-image" />
      <h3 class="menu-item-name">${item.name}</h3>
      <p class="menu-item-description">${item.description}</p>
      <p class="menu-item-price">${item.price}</p>
      <button class="buy-now-btn">Buy Now</button>
    `;

    gridContainer.appendChild(card);
  });

  menuSection.appendChild(gridContainer);
};

export default loadMenuPage;
