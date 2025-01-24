import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate,useNavigation } from 'react-router-dom'
import image from "../assets/aboutbanner.jpg"
import blog1 from "../assets/blog1.jpeg"
import blog2 from "../assets/blog2.jpg"
import blog3 from "../assets/blog3.jpg"
import { useParams } from 'react-router-dom'
import about1 from "../assets/about1.webp"


const blogs = [
    {
      id:1,
      image: blog1,
      date: 'January 14, 2025',
      title: 'Make Your Lohri And Makar Sankranti Special With Eagleview JewelTech Jewellers',
      link: '#',
      desc:"India celebrates two vibrant festivals to mark the arrival of longer days and the harvest season as the winter chill recedes and the Sun begins its journey northward. These festivals are Lohri and Makar Sankranti, which mark the arrival of longer days and the harvest season. Rather than simply celebrating rituals and traditions, these festivals celebrate life, prosperity, and togetherness. This joyous occasion would be enhanced by exquisite jewellery from EagleView JewelTechs. Let’s explore how  can help you make your Lohri and Makar Sankranti truly special."
    },
    {
      id:2,
      image: blog2,
      date: 'January 16, 2025',
      title: 'Iconic Celebrity Jewellery Trends For 2025',
      link: '#',
      desc:"At EagleView JewelTechs, we bring the latest celebrity-inspired jewellery trends to life with exquisite craftsmanship and quality. Jewellery trends for 2025 focus on individuality and self-expression, offering everything from bold, colourful gemstones to minimalist diamond pieces. Whether you’re looking for bold statement pieces, timeless classics, or contemporary designs with traditional elegance, our collection has something to suit your style. Take inspiration from your favourite celebrities and explore the latest collections at  to stay ahead in fashion and jewellery."
    },
    {
      id:3,
      image: blog3,
      date: 'January 18, 2024',
      title: 'How To Choose The Perfect Gold Jewellery For Winter Weddings',
      link: '#',
      desc:"Elegant, intimate, and timeless winter weddings bring elegance and beauty to any celebration. With the chill setting in and the world becoming a winter wonderland, choosing jewellery for a wedding becomes even more vital. With the right piece of gold jewellery, a bridal look can be transformed from beautiful to breath taking, highlighting the bride’s radiance while harmonizing with the magical winter atmosphere. Warm tones and classic appeal make gold the perfect metal to complement this season’s cool colours."
    },
  ];
function BlogRead() {
    const {id}=useParams()
    console.log(id)
    const fil=blogs.filter((e)=>e.id===Number(id))
    console.log(fil[0])
  return (
    <div  className='mt-6 flex flex-col'>
      <div className="bg-[#f2f1ea] flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2">
                <img className="h-[30vh] md:h-[50vh] md:w-[50vw] w-[100vw]" src={fil[0].image}  alt="Gold Collection"  />
              </div>
              <div className="text-center m-auto text-3xl md:text-4xl font-bold font-serif">
                {fil[0].title}
              </div>
            </div>

        <div className='p-4 md:p-8 mx-[15vw] text-1xl  text-center'>
            {fil[0].desc}
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

   
    </div>
  )
}

export default BlogRead