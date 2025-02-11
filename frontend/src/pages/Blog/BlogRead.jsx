import React from 'react'
import { useParams } from 'react-router-dom'
import about1 from "../../assets/about1.webp"
import { blogs } from '../../data/DataSet'

function BlogRead() {
  const { id } = useParams()
  const fil = blogs.filter((e) => e.id === Number(id))
  return (
    <div className='mt-6 flex flex-col'>
      <div className="bg-[#f2f1ea] flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img className="h-[30vh] md:h-[50vh] md:w-[50vw] w-[100vw]" src={fil[0].image} alt="Blog Image" />
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
            {fil[0].values}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {fil[0].valueDesc}
          </p>
        </div>
      </div>


    </div>
  )
}

export default BlogRead