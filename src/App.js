import React, { useState } from 'react';

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);

  function togglePepperoni(e) {
    setPepperoniIsChecked(e.target.checked);
  }

  return (
    <div>
      <h1>Select Pizza Toppings</h1>
      <input
        type="checkbox"
        id="pepperoni"
        checked={pepperoniIsChecked}
        aria-checked={pepperoniIsChecked}
        onChange={togglePepperoni}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>

      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {pepperoniIsChecked && <li>Pepperoni</li>}
      </ul>

      <h2>Select Pizza Size</h2>
      <select name="size" id="size">
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <h2>Your Selection</h2>
      <p>{pepperoniIsChecked ? "Pepperoni" : "Cheese"} Pizza</p>

      <h2>Contact Info</h2>
      <input type="text" id="contactInfo" placeholder="Enter your contact info" />

      <button type="submit">Submit Order</button>
    </div>
  );
}

export default App;
