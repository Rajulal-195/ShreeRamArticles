import React from 'react'

import ExProject from '../Comp/ExProject';

export default function About() {

  const machines = [

    {
      name: 'Block Cutter',
      description: 'Used for cutting of block by cutter in appropriate size as required.',
      imgSrc: "mch1.jpg", // Replace with actual image path
    },
    {
      name: 'Bridge Cutter',
      description: 'Used for cutting of stone in accurate size. The table can rotate at 90° or 360°.',
      imgSrc: "mch2.jpg", // Replace with actual image path
    },
    {
      name: 'CNC Machine',
      description: 'Used for carbene of stone 2D, 3D. It has 3 axes and works in three dimensions.',
      imgSrc: "mch3.jpg", // Replace with actual image path
    },
    {
      name: 'CNC Lathe',
      description: 'Used for making pillars, balls, and spherical shapes.',
      imgSrc:" mch4.avif", // Replace with actual image path
    },
    {
      name: 'Water Jet',
      description: 'Cuts stone using high pressure of water with garnet sand. It is used for two-dimensional cutting.',
      imgSrc: "mch5.png", // Replace with actual image path

    }
  ]



  return (
    <>

      <div className="bg-white text-gray-700">
        <section className="relative w-full">
          <img alt="Closeup of a blue statue sculpture with blurred background of buildings" className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover" height="400" src="https://storage.googleapis.com/a1aa/image/8087367b-78da-4b2d-6faf-8a0dc732313c.jpg" width="1920" />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-white text-4xl sm:text-5xl font-normal leading-tight">
              About Us
            </h1>
            <p className="text-white text-sm sm:text-base mt-2 max-w-xl">
              3 Generations. Over 20 Years in Business. Proudly Made in the INDIA.
            </p>
          </div>
        </section>








        <section className="max-w-6xl mx-auto px-6 sm:px-10 py-12">
          <div className="flex items-center justify-center space-x-4 mb-12">
            <hr className="border border-gray-300 w-24 sm:w-32" />
            <h2 className="text-[#0a3a5d] sm:text-3xl tracking-widest font-light text-bold">
              Who We Are
            </h2>
            <hr className="border border-gray-300 w-24 sm:w-32" />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-12 items-start">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img alt="Three men of different ages standing side by side smiling, representing three generations of family statue makers" className="w-full h-auto object-cover rounded"  src="https://storage.googleapis.com/a1aa/image/177ee15c-41e9-411e-0d42-ea0635ed1ffd.jpg"  />
            </div>
            <div className="md:w-1/2 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p className="mb-6">
                Shriram Atrical is a proprietorship firm established by Mr. Rambabu Kumawat, who has over 20 years of experience in stone construction. Specializing in temple architecture, Jain mandirs, grand entrances, Vedi structures, and building elevations, Shriram Atrical exclusively works with a variety of stones, including Dholpur, Red Agra, Gwalior Mint, Jodhpur, Marble, Basalt, and various sandstone types (Red, White, etc.).
              </p>
              <p>
                The company is equipped with advanced machinery, including Block Cutters, Bridge Cutters, CNC Machines, CNC Lathes, and Water Jet Cutters, enabling precise and intricate stonework. These machines support tasks like block cutting, 2D/3D carving, pillar shaping, and high-pressure water cutting for stone furniture such as Jali and arches.
              </p>
            </div>
          </div>
        </section>


      </div>

      <div className="max-w-5xl mx-auto p-6 hover:bg-white">
        <h2 className="text-2xl font-bold mb-4">Our Machines & Equipment

        </h2>
        <ul className="space-y-4">
          {machines.map((machine, index) => (
            <li key={index} className="  sm:p-4 rounded shadow flex items-center hover:bg-gray-100 transition-transform duration-300 transform hover:scale-110 ">
              <img
                src={machine.imgSrc}
                alt={machine.name}
                className="w-full h-64 object-cover rounded-tl-lg rounded-bl-[50px]  min-w-56 " />
              <div className='ms-4'>
                <h3 className="text-xl font-semibold">{machine.name}</h3>
                <p className="text-gray-700">{machine.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      

      <ExProject/>

    </>
  )
}

