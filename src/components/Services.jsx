import React from 'react'
import "./services.css"
import ServiceOptions from "./ServiceOptions" 

const Services = () => {
  return (
    <>
       <section className="services-section">
      <h2 className="services-title">Services</h2>

      <div className="services-card">
        <p>
          Since the company was founded, Fürst Solutions GmbH has established itself 
          as a reliable and trustworthy specialist service provider, 
          for practice orientated services relating to medical devices and products, 
          such as dialysis machines and reverse osmosis systems.
        </p>

        <p>
          Our management consultancy service offers an extended hand for European
           partners wanting to develop their business in African countries. At the same time, w
           e assist African companies to better understand the European mentality and find more European partners.
        </p>

        <p>
          The core competence of Fürst Solutions GmbH lies in the conception and 
          realization of individual solutions, in order to ensure compliance with international 
          standards such as manufacturer-specific requirements, legal requirements (Medical Devices Act, MPG) 
          and the necessary documentation, both in Europe and worldwide, e.g. in countries of Africa and South America.
        </p>
      </div>

         <ServiceOptions/>

    </section> 
    </>
  )
}

export default Services