import React, { useState } from 'react';
import './style.css';




import React, { useState } from 'react';

function Form() {

  const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // form submission logic needed
    };

    return (
      <section>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {/*  email and message */}
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  };
}
export default Contact;
