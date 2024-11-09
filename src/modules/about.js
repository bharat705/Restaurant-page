const loadAboutPage = () => {
  const aboutSection = document.getElementById("about-section");
  aboutSection.innerHTML = `
    <div class="about-container">
      <div class="section-heading">
        <h1>About Us</h1>
      </div>
      <div class="welcome-section">
        <h3>Welcome to Royal Kitchen – Where Elegance Meets Flavor.</h3>
        <p>At Royal Kitchen, we believe that dining is not just about food; it’s an art form that delights all the senses. Founded on the principles of quality, creativity, and sustainability, our restaurant has earned a reputation for offering an exceptional culinary experience that celebrates both tradition and innovation.</p>
      </div>
      <div class="about-section">
        <h2>Our Philosophy</h2>
        <p>We view every dish as a masterpiece crafted to inspire. From the moment you step into Royal Kitchen, you’re immersed in an ambiance that’s as sophisticated as it is welcoming. Our philosophy is simple: to bring joy and elegance to each meal, whether you’re dining with us in person or savoring our offerings at home.</p>
        <h2>Our Features</h2>
        <div class="features-grid">
          <div>
            <h3>Gourmet Ingredients</h3>
            <p>We source only the finest ingredients, handpicked from local farms and trusted suppliers across the globe. Our commitment to freshness and quality ensures that every bite at Royal Kitchen is an experience of true culinary craftsmanship. From farm-to-table produce to artisanal cheeses and spices, we take pride in using ingredients that make a difference.</p>
          </div>
          <div>
            <h3>Our Culinary Team</h3>
            <p>Royal Kitchen’s culinary team is led by some of the most talented chefs in the industry, each bringing a unique touch to our signature dishes. With years of training and a passion for perfection, our chefs artfully combine traditional techniques with modern innovations, creating flavors that are as exquisite as they are memorable. Every dish is a tribute to the art of fine dining.</p>
          </div>
          <div>
            <h3>A Commitment to Sustainability</h3>
            <p>We are dedicated to making choices that protect our planet. From using sustainable ingredients to eco-friendly packaging for deliveries, Royal Kitchen strives to minimize its environmental footprint while maintaining the highest standards of quality and luxury. Our commitment to sustainability is one more way we honor our customers and the world we share.</p>
          </div>
          <div>
            <h3>A Seamless Experience</h3>
            <p>We understand that dining is about more than just great food. Our carefully designed online ordering system offers a seamless experience, allowing you to enjoy the sophistication of Royal Kitchen wherever you are. With just a few clicks, your meal is crafted, prepared, and delivered with the same care and attention to detail as you would expect in our dining room.</p>
          </div>
        </div>
      </div>
      <div class="invite-section">
        <h2>Experience the Essence of Royal Dining.</h2>
        <p>Royal Kitchen invites you to join us in a culinary journey that is as enriching as it is flavorful. Whether you’re a connoisseur or simply seeking a memorable meal, we are here to make every moment extraordinary.</p>
      </div>
    </div>`;
};

export default loadAboutPage;
