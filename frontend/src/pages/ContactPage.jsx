import React from 'react'
import contact1 from "../assets/contact1.jpg"
import LocationCard from "../components/LocationCard";
import { locations } from '../data/DataSet';


function ContactPage() {
  return (
    <div className='mt-6 flex flex-col' >
      <div className="bg-[#f2f1ea] flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img className="h-[30vh] md:h-[50vh] md:w-[50vw] w-[100vw]" src={contact1} alt="Contact Us" />
        </div>
        <div className="text-center m-auto text-3xl md:text-6xl font-bold font-serif">
          Contact
        </div>
      </div>

      <div className="our-locations">
        <h2 className="locations-title">Our Locations</h2>
        <div className="locations-grid">
          {locations.map((location, index) => (
            <LocationCard key={index} location={location} />
          ))}
        </div>
      </div>


    </div>
  )
}

export default ContactPage