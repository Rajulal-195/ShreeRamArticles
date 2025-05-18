import React from 'react';
import ExProject from '../Comp/ExProject';

const projects = [
    {
        id: 1,
        title: "Chouth Mata Mandir, Bundi Raj",
        description: "A renowned temple constructed using hard white sandstone.",
        materials: "Hard white sandstone",
        techniques: "Carbene of stone by Sadguru Gharai and CNC machine",
        imageUrl: "project1.png" // Updated to use local image
    },
    {
        id: 2,
        title: "Darwaja Chouth Mata Mandir, Bundi Raj",
        description: "The main gate of the Chouth Mata Mandir, fitted by skilled labor.",
        materials: "Dholpur stone",
        techniques: "Fitted by skilled labor with Sadguru Gahadi",
        imageUrl:" project2.png" // Updated to use local image
    },
    {
        id: 3,
        title: "Gangrawal Maharaj Mandir, Chattrganj, Bundi Raj",
        description: "Constructed using hard white sandstone.",
        materials: "Hard white sandstone",
        techniques: "Carbene of stone by Sadguru Gahari and CNC machine",
        imageUrl: "project3.png "// Updated to use local image
    },
    {
        id: 4,
        title: "Shree Baldev Ji Mandir, Mandkla at Bhilwara",
        description: "A temple constructed using hard white sandstone.",
        materials: "Hard white sandstone",
        techniques: "Carbene of stone by Sadguru Gahari and CNC machine",
        imageUrl: "project4.png" // Updated to use local image
    }
];

export default function Project() {
    return (
        <>
            <div className="bg-white text-gray-700 ">
                <h1 className='text-[#0a3a5d] text-2xl md:text-3xl tracking-widest mb-4 text-center text-extrabold underline'>Our Projects</h1>
                <div class=" mx-auto rounded-t-full shadow-2xl  pt-16  sm:p-14 text-white text-center  bg-[#0a3a5d]">
                    <h1 class=" font-bold text-3xl sm:text-4xl leading-tight mb-8 m-2 ">
                        Showcasing Expertise in <br /> Advanced Stone Carving Technologies
                    </h1>
                    <p class="text-white text-lg  sm:text-xl leading-relaxed tracking-wide p-2">
                        These projects exemplify Shriram Atrical’s proficiency in utilizing cutting-edge stone carving technologies, with particular expertise in Computer Numerical Control (CNC) machinery. His work demonstrates a commitment to combin
                        ing aesthetic excellence with structural integrity in the creation of stone temples and architectural elements.
                    </p>
                </div>
                <div className="px-4 px-16:lg flex items-center justify-center p-4 from-blue-50 via-white to-gray-50 ">

                </div>

                <div className="flex flex-wrap justify-center">
                    {projects.map((project) => (
                        <div key={project.id} className="rounded overflow-hidden shadow-lg m-4 max-w-sm transition-transform duration-300 transform hover:scale-110">
                            <img
                                alt={project.title}
                                className="w-full h-auto object-cover rounded-md p-2"
                                src={project.imageUrl} // This will now use the local image
                            />
                            <div className="p-4">
                                <h2 className="font-bold text-xl mb-2">{project.title}</h2>
                                <p className="text-gray-700 text-base mb-2">{project.description}</p>
                                <p className="text-gray-600 text-sm">Materials: {project.materials}</p>
                                <p className="text-gray-600 text-sm">Techniques: {project.techniques}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ExProject/>
        </>
    );
}
