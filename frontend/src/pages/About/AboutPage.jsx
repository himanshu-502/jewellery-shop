import React from 'react'
import image from "../../assets/aboutbanner.jpg"
import about1 from "../../assets/about1.webp"
import { aboutDesc } from "../../data/DataSet";

function AboutPage() {

  return (
    <div className='mt-6 flex flex-col'>
      <div className="bg-[#f2f1ea] flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img className="h-[30vh] md:h-[50vh] md:w-[50vw] w-[100vw]" src={image} alt="About Us" />
        </div>
        <div className="text-center m-auto text-3xl md:text-6xl font-bold font-serif">
          Our Story
        </div>
      </div>

      <div className='p-4 md:p-8 mx-[15vw] text-1xl  text-center'>
        Established in 1980, EagleView JewelTechs, boasts a 40-year legacy as a distinguished name in exquisite jewellery. Beginning with a modest outlet in Sadar Bazar to an astounding around Delhi NCR & further diversified to Wholesale & Export section. We've grown to an impressive chain of six stores across Delhi NCR (Pitampura, Chandni-Chowk, Sadar Bazar, Indirapuram, South Extension and Gurugram) and three franchises in (Rohtak, Karnal, and Chandigarh).
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center bg-white p-8">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={about1}
            alt="Jewellery Design"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        <div className="md:w-1/2 p-4 md:pl-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Grounded in cultural and ethical values
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            EagleView JewelTechs prioritizes client, supplier, and staff relationships.
            Our commitment to ethics and loyalty has positioned us as a rooted
            brand with enduring principles.
          </p>
        </div>
      </div>

      <div className="bg-white py-8">
        {/* Title */}
        <h1 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          One-Stop Destination
        </h1>


        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
          {aboutDesc.map((item, index) => (
            <div key={index} className="flex flex-col items-center">

              <img
                src={item.imgSrc}
                alt={item.caption}
                className="w-72 h-96 object-cover rounded-md shadow-lg"
              />

              <p className="mt-4 text-lg font-medium text-gray-700">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutPage