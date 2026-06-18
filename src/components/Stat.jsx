import React from 'react'
import "./stat.css"

const Stat = () => {
    const statsData = [
    { number: 22, label: "PRODUCT TRAINING" },
    { number: 85, label: "INSTALLATIONS" },
    { number: 75, label: "MAINTENANCE" },
    { number: 15, label: "COUNTRIES" },
  ];
  return (
    <>
<section className="stats">
      <div className="stats-container">
        <h2 className="stat-title">Projects</h2>
        {statsData.map((item, index) => (
          <div className="stat-box" key={index}>
            <h1 className="stat-number">{item.number}</h1>
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Stat