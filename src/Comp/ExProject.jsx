import React from 'react'

export default function ExProject() {

  const images = [
    "Exproject5.png",
    "Exproject2.png",
    "Exproject3.png",
    "Exproject4.png",
    "Exproject1.png",
    "Exproject6.png",
    //"Exproject7.png",
    "Exproject8.png",
    "Exproject9.png",
    "Exproject10.png",
  ]
  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-Extrabold mb-4 text-center text-[#0a3a5d]">Our Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>


    </>
  )
}
