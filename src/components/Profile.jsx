import React from 'react'
import "./profile.css"
import ceo from "../assets/theceo.png"
import profile from "../assets/banjiteam.png"

const Profile = () => {
 const teamMembers = [
    {
      name: "Kunle Dele-orelusi",
      role: "Ceo",
      image: ceo// Replace with the actual image path
    },
    {
      name: "Banji Owolabi",
      role: "Technical Manager ",
      image: profile, // Replace with the actual image path
    },
    
  ];

  return (
    <>
    <div className="team-container">
        <h2 className= "team-title">Team</h2>
      {teamMembers.map((member, index) => (
        <div className="team-member" key={index}>
          <div className="image-container">
            <img src={member.image} alt={member.name} />
          </div>
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default Profile