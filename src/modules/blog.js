// Import images for Webpack
import blog1 from "../image/blog1.jpg";
import blog2 from "../image/blog2.jpg";
import blog3 from "../image/blog3.jpg";
import blog4 from "../image/blog4.jpg";
import blog5 from "../image/blog5.jpg";

const blogPosts = [
  {
    title: "The Art of Fine Dining",
    date: "September 20, 2023",
    image: blog1,
    excerpt:
      "Discover the nuances of fine dining and the elements that make it an unforgettable experience.",
  },
  {
    title: "Exploring Exotic Ingredients",
    date: "October 5, 2023",
    image: blog2,
    excerpt:
      "A deep dive into unique ingredients from around the world that bring out bold flavors.",
  },
  {
    title: "Perfecting Your Culinary Skills",
    date: "October 15, 2023",
    image: blog3,
    excerpt:
      "From knife techniques to plating, learn how to elevate your cooking skills like a pro.",
  },
  {
    title: "A Journey Through Italian Cuisine",
    date: "November 1, 2023",
    image: blog4,
    excerpt:
      "Explore the rich heritage of Italian food, from pastas to pizzas and everything in between.",
  },
  {
    title: "Wine Pairing 101",
    date: "November 8, 2023",
    image: blog5,
    excerpt:
      "Learn the basics of wine pairing and how to complement flavors for the perfect meal.",
  },
];

const loadBlogPage = () => {
  const blogSection = document.getElementById("blog-section");
  blogSection.innerHTML = ""; // Clear any existing content

  // Create a heading for the blog section
  const heading = document.createElement("h2");
  heading.classList.add("blog-heading");
  heading.textContent = "Latest Articles";

  // Create a container for the blog grid
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("blog-grid");

  // Generate each blog post as a card
  blogPosts.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("blog-card");

    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}" class="blog-image" />
      <div class="blog-content">
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-date">${post.date}</p>
        <p class="blog-excerpt">${post.excerpt}</p>
        <a href="#" class="read-more">Read More</a>
      </div>
    `;

    gridContainer.appendChild(card);
  });

  blogSection.appendChild(heading);
  blogSection.appendChild(gridContainer);
};

export default loadBlogPage;
