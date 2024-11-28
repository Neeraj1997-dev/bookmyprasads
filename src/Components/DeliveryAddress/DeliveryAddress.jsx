import React, { useState } from 'react';
import './DeliveryAddress.css';
import { Link, useNavigate } from 'react-router-dom';

const DeliveryAddress = () => {
  const navigate = useNavigate();

  const [data, SetData] = useState({
    name: "",
    email: "",
    address: "",
    state: "",
    pin: "",
    phone: "",
  });

  const { name, email, address, state, pin, phone } = data;

  const handleChange = (e) => {
    SetData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Define the data you want to send
    const formData = {
      name,
      email,
      address,
      state,
      pin,
      phone,
      timestamp: new Date().toLocaleString(),  // Add a timestamp to track the submission time
    };

    try {
      const response = await fetch('https://sheetdb.io/api/v1/k3gagk52a9gcz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      const data = await response.json();
      if (response.ok) {
        // Reset the form data
        SetData({
          name: "",
          email: "",
          address: "",
          state: "",
          pin: "",
          phone: "",
        });

        // Navigate to the "Thank You" page after successful submission
        navigate("/thankyou");
      } else {
        console.error('Error submitting data:', data);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>अपना पता दर्ज करें</h1>
        <div className="loginsignup-fields">
          <input
            name="name"
            type="text"
            placeholder="आपका नाम"
            value={name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="ईमेल पता"
            value={email}
            onChange={handleChange}
          />
          <input
            name="address"
            type="text"
            placeholder="आपका पता"
            value={address}
            onChange={handleChange}
          />
          <input
            name="state"
            type="text"
            placeholder="आपका राज्य"
            value={state}
            onChange={handleChange}
          />
          <input
            name="pin"
            type="number"
            placeholder="पिन कोड"
            value={pin}
            onChange={handleChange}
          />
          <input
            name="phone"
            type="number"
            placeholder="फ़ोन नंबर"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>बुक करें</button>
      </div>
    </div>
  );
};

export default DeliveryAddress;
