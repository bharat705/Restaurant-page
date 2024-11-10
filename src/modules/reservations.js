const loadReservationsPage = () => {
  const reservationSection = document.getElementById("reservations-section");
  reservationSection.innerHTML = ""; // Clear any existing content

  // Create form container
  const formContainer = document.createElement("div");
  formContainer.classList.add("reservation-form-container");

  // Create reservation form HTML structure
  formContainer.innerHTML = `
    <h2 class="reservation-title">Book a Table</h2>
    <form class="reservation-form">
      <label for="date">Date</label>
      <input type="date" id="date" name="date" required>

      <label for="time">Time</label>
      <input type="time" id="time" name="time" required>

      <label for="party-size">Party Size</label>
      <select id="party-size" name="party-size" required>
        <option value="" disabled selected>Select your party size</option>
        <option value="1">1 Person</option>
        <option value="2">2 People</option>
        <option value="3">3 People</option>
        <option value="4">4 People</option>
        <option value="5">5 People</option>
        <option value="6">6 People</option>
        <option value="7">7 People</option>
        <option value="8">8+ People</option>
      </select>

      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your Full Name" required>

      <label for="phone">Phone Number</label>
      <input type="tel" id="phone" name="phone" placeholder="123-456-7890" required pattern="\\d{3}-\\d{3}-\\d{4}">

      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="you@example.com" required>

      <label for="requests">Special Requests</label>
      <textarea id="requests" name="requests" placeholder="Any special requests"></textarea>

      <button type="submit" class="reservation-submit">Reserve Now</button>
    </form>
    <div class="form-feedback"></div>
  `;

  reservationSection.appendChild(formContainer);
};

export default loadReservationsPage;
