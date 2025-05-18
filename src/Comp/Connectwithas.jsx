import React from 'react'


export default function Connectwithas() {



    const socialPlatforms = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/",
            svg: (
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.342v21.316C0 23.4.6 24 1.325 24h11.495v-9.294H9.723v-3.622h3.097V8.413c0-3.066 1.873-4.736 4.605-4.736 1.312 0 2.438.097 2.767.14v3.21l-1.9.001c-1.49 0-1.777.708-1.777 1.746v2.291h3.55l-.463 3.622h-3.087V24h6.055c.725 0 1.324-.6 1.324-1.342V1.342C24 .6 23.4 0 22.675 0z" />
                </svg>
            )
        },
        {
            name: "Twitter",
            url: "https://twitter.com/",
            svg: (
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M24 4.557a9.83 9.83 0 01-2.828.776 4.932 4.932 0 002.165-2.724 9.868 9.868 0 01-3.127 1.196 4.916 4.916 0 00-8.373 4.482A13.945 13.945 0 011.671 3.149 4.916 4.916 0 003.195 9.86a4.897 4.897 0 01-2.228-.616v.061a4.916 4.916 0 003.941 4.814 4.902 4.902 0 01-2.224.085 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 21.542a13.905 13.905 0 007.548 2.209c9.056 0 14.002-7.514 14.002-14.03 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
                </svg>
            )
        },
        {
            name: "Instagram",
            url: "http://instagram.com/shri_ram_article/",
            svg: (
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.25 1.75a1 1 0 110 2 1 1 0 010-2zm-4.25 2.75a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
            )
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/",
            svg: (
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.036-1.85-3.036-1.85 0-2.134 1.445-2.134 2.939v5.666h-3.554v-11.5h3.414v1.57h.049c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.27 2.37 4.27 5.453v6.327zm-16.292-13.015c-1.144 0-2.07-.926-2.07-2.07 0-1.144.926-2.07 2.07-2.07s2.07.926 2.07 2.07c0 1.144-.926 2.07-2.07 2.07zm1.777 13.015h-3.554v-11.5h3.554v11.5zm16.068-20.452h-18.743c-.967 0-1.76.794-1.76 1.76v18.742c0 .967.793 1.761 1.76 1.761h18.743c.967 0 1.76-.794 1.76-1.76v-18.743c0-.967-.793-1.76-1.76-1.76z" />
                </svg>
            )
        }
    ];


    return (
        <>

            <div className="m-0 p-0 font-sans font-family: 'Open Sans', sans-serif;">
                <div className="relative w-full h-[250px] sm:h-[250px] md:h-[200px] lg:h-[200px] xl:h-[200px] 2xl:h-[600px] overflow-hidden">
                    <img alt="Closeup of white marble statues busts with soft lighting and blurred background" className="absolute inset-0 w-full h-full object-cover object-center" decoding="async"  loading="lazy" src="connect.jpg"  />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 text-center">

                            <h2 className="text-4xl font-extrabold mb-6 text-center text-white tracking-wide">Connect with Us</h2>
                            <p className="text-center mb-8 text-xl font-semibold max-w-3xl text-yellow-50">Follow us on social media for updates and more!</p>
                            <div className="flex justify-center gap-12 flex-wrap text-white">
                                {socialPlatforms.map(({ name, url, svg }) => (
                                    <a
                                        key={name}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Connect on ${name}`}
                                        className="hover:text-orange-400 transition-colors duration-300 transform hover:scale-125"
                                    >
                                        {svg}
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            
        </>
    )
}
