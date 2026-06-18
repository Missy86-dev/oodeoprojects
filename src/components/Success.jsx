import React from 'react'
import "./success.css";
import { Link } from 'react-router-dom';

export const Success = () => {
  return (
    <div>
        <div className="success-container">
      <div className="success-card">
        <div className="checkmark">✓</div>

        <h1>Success!</h1>

        <p>
          Your request has been submitted successfully. We will get back to you
          shortly.
        </p>

        <Link to="/" className="home-btn">
          Return Home
        </Link>
      </div>
    </div>
    </div>
  )
}
