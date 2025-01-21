import React from 'react'
import conatct1 from "../assets/contact1.jpg"
import LocationCard from "./LocationCard";

function ConatctPage() {
  const locations = [
    {
      title: 'Flagship',
      address: 'PP Tower, H - 5, Netaji Subhash Place, Pitampura, Delhi, 110034',
      phone: '+91 84482 25844,70425 00206',
      directionsLink: '#',
    },
    {
      title: 'South Extension Branch',
      address: 'A-13, South Extension, Part-1, First Floor, New Delhi-110049',
      phone: '+011-41100600,+011-41100700',
      directionsLink: '#',
    },
    {
      title: 'Indirapuram Branch',
      address:
        'G-10, Krishna Apra Shopping Complex, Vaibhav Khand, Indirapuram Ghaziabad (U.P)-201014',
      phone: '+91 981 097 4147',
      directionsLink: '#',
    },
    {
      title: 'Gurugram Branch',
      address:
        '415, Ramleela Ground, Sadar Bazarr, Opposite- Hanuman Mandir, Gurugram-122001',
      phone: '+91 84482 25844',
      directionsLink: '#',
    },
  ];
  return (
    <div className='mt-6 flex flex-col' >
      <div className="bg-[#f2f1ea] flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img className="h-[30vh] md:h-[50vh] md:w-[50vw] w-[100vw]" src={conatct1}  alt="Gold Collection"  />
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

export default ConatctPage