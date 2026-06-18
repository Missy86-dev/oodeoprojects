import React, { useState } from "react";
import "./contact.css"


export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.firstName ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form Submitted:", formData);

    setSubmitted(true);

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };


  return (
    <section className="contact-section">

      <form
  action="https://formsubmit.co/elliot.lola@gmail.com"
  method="POST"
  className="contact-form"
>
  <input
    type="hidden"
    name="_subject"
    value="New Contact Form Message"
  />

  <input
    type="hidden"
    name="_captcha"
    value="false"
  />

  <input
    type="hidden"
    name="_next"
    value="http://localhost:5173/success"
  />

  <input
    type="text"
    name="firstName"
    placeholder="First Name"
    required
  />

  <input
    type="text"
    name="lastName"
    placeholder="Last Name"
  />

  <input
    type="email"
    name="email"
    placeholder="Email"
    required
  />

  <input
    type="text"
    name="subject"
    placeholder="Subject"
  />

  <textarea
    name="message"
    placeholder="Message"
    rows="5"
    required
  ></textarea>

  <button type="submit">
    Send Message
  </button>
</form>


      
    </section>
  );
};

