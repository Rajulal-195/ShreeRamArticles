import React, { useEffect, useRef, useState } from 'react'

export default function Advance() {

    const images = [
        {
            src: 'https://imgs.search.brave.com/lOi4Dk8SDUlp-N2333N1arGFllZKLjA0uD-tFP7T-Iw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzM3Mjg5MTAwL2Mv/MjI1MC8yMjUwLzAv/NDY3L2lsL2I1ODc5/OC81MjExNzYwNzMz/L2lsXzYwMHg2MDAu/NTIxMTc2MDczM19u/OTQ3LmpwZw',
            alt: 'Artisan sculpting a stone statue with hammer and chisel',
        },
        {
            src: 'https://imgs.search.brave.com/YUobv0nwskEPSLhWg2Sv0JyzQMBcXCUm6w6fRiIiPqM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQyL2Ez/L2ZhLzQyYTNmYTEz/ZmJiNjA2Y2NlMDJl/NjgxNzk5N2I5N2U4/LmpwZw',
            alt: 'Close-up of hand carving detailed stone sculpture',
        },
        {
            src: 'https://imgs.search.brave.com/etYIWAghQgHzrH4OZ3V-Cji1wPu0Xqqd_kWVlc14UvI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXRoYW5jdXJyaWVy/YXJ0LmNvbS9jb250/ZW50L3YxLzVjMDIw/NmMxY2M4ZmVkNzBm/MWM4MjMxNS8xNTQ0/OTMzNTI5OTE1LU5V/WkVWS0VMQjFHRVZS/VTJPNEw1L0lNR18w/MDA4LmpwZw',
            alt: 'Stone sculptor working on a large block of stone outdoors',
        },
        {
            src: 'https://imgs.search.brave.com/oy3bk758QK0bTKKIUjTZO7rEITnELF48u0T2KKMTGmU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M3L2Jl/LzdkL2M3YmU3ZDY2/NjlmNWY2ODBkMzAz/NWQwNmE1MGI0Mzc3/LmpwZw',
            alt: 'Stone blocks stacked at a stone crafting business yard',
        },
        {
            src: 'https://imgs.search.brave.com/rwfhrZIZAOIs48MLfol6TB_7gDDzdFoZ0j5IVgRcgbY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXRoYW5jdXJyaWVy/YXJ0LmNvbS9jb250/ZW50L3YxLzVjMDIw/NmMxY2M4ZmVkNzBm/MWM4MjMxNS8xNTQ0/OTI5NjQwNDgyLTJR/UzY3SVhORTUxRFNV/Uks3STZEL0lNR18z/MDY2LmpwZw',
            alt: 'Polished marble stone slabs ready for sale',
        },
        {
            src: 'https://imgs.search.brave.com/irjim76H43BObwc3eoazbEphg4Ko6UJVvL2XLLjrux0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFNWmZJREdYcUwu/anBn',
            alt: 'Finished stone sculptures displayed in an outdoor gallery',
        },

        {
            src: 'https://imgs.search.brave.com/XDV9c2gl8Pmn7IW7wNFdeLpQUdQ5qhBKnDPVw3CoV4A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXRoYW5jdXJyaWVy/YXJ0LmNvbS9jb250/ZW50L3YxLzVjMDIw/NmMxY2M4ZmVkNzBm/MWM4MjMxNS8xNTQ0/OTMzNTcwMTYyLVhM/T0ZDWFYyS1ZBNUlJ/NEJKNEJSL0lNR18w/MjIyLmpwZw',
            alt: 'Finished stone sculptures displayed in an outdoor gallery',
        },

        {
            src: 'https://imgs.search.brave.com/GhEC7FL9CawqBm3OLC9XDFHfA0I9YD3qN1KCKULBdYI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFsZUZKRnd5cEwu/anBn',
            alt: 'Finished stone sculptures displayed in an outdoor gallery',
        },

        {
            src: 'https://imgs.search.brave.com/ehcMLoE6qeMsRrGr9oycPqUwYgu62bZ6TeCpcaL-iYo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM0L2I3/LzNiLzM0YjczYjEw/ZTMzNjUzMzllNDA3/MDJiZGU5MDYzOWM0/LmpwZw',
            alt: 'Finished stone sculptures displayed in an outdoor gallery',
        },

        {
            src: 'https://imgs.search.brave.com/DsXIVOIdCfJTb-ZrLmUTnF1nr3ivOZ7akRzjCAlqwTY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFlS2lCTGp5dkwu/anBn',
            alt: 'Finished stone sculptures displayed in an outdoor gallery',
        },

        {
            src: 'https://imgs.search.brave.com/9uAvflhoHfMUrJSPgYoVeSUExgeCa6dLqEwg5eT1P2I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXRoYW5jdXJyaWVy/YXJ0LmNvbS9jb250/ZW50L3YxLzVjMDIw/NmMxY2M4ZmVkNzBm/MWM4MjMxNS8xNTQ0/OTI5NzExMDU5LVlT/Vk5ZOEZVUUdUREpI/SDRINkwyL0lNR180/MDQzLmpwZw',
            alt: 'Finished stone sculptures displayed in an outdoor gallery',
        },

        {
            src: 'https://imgs.search.brave.com/RxbucDeEG0dqSJ1k_XM916rrjDAck_OUUX1N9aHo5qM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdjLzZh/LzAzLzdjNmEwM2U5/ODE5MDAwMWIzM2Fi/YjFiNmQ2MGRmYzc4/LmpwZw',
            alt: 'Finished stone sculptures displayed in an outdoor gallery',
        },
            
        
        

    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);
    const carouselRef = useRef(null);

    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            if (width < 640) return 1;
            if (width < 768) return 2;
            if (width < 1024) return 3;
            return 4;
        };

        const handleResize = () => {
            setVisibleCount(updateVisibleCount());
            setCurrentIndex((prev) => Math.min(prev, images.length - updateVisibleCount()));
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev < images.length - visibleCount ? prev + 1 : 0));
        }, 2000);
        return () => clearInterval(interval);
    }, [visibleCount]);

    const maxIndex = images.length - visibleCount;

    const handlePrev = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    const handleNext = () => setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));

    const translateX = -currentIndex * 228;

    return (
        <>
            <div className="m-0 p-0 font-sans font-family: 'Open Sans', sans-serif;">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] overflow-hidden">
                    <img alt="Closeup of white marble statues busts with soft lighting and blurred background" className="absolute inset-0 w-full h-full object-cover object-center" decoding="async" height="600" loading="lazy" src="https://storage.googleapis.com/a1aa/image/3f881215-30c4-45e1-2456-e3bfc613fe42.jpg" width="1920" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 text-center">
                        <p className="text-white text-sm sm:text-base md:text-lg font-normal mb-1 sm:mb-2 md:mb-3 tracking-wide">
                            READY TO CREATE
                        </p>
                        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 sm:mb-3 md:mb-4 max-w-[90vw] sm:max-w-[600px]">
                            SOMETHING BEAUTIFUL?
                        </h2>
                        <p className="text-white text-xs sm:text-sm md:text-base font-normal mb-4 max-w-[90vw] sm:max-w-[600px]">
                            Call us direct at
                            <span className="text-[#ff6f3c] font-semibold px-2">
                                8742025990,9982146723
                            </span>
                            to discuss your wholesale or retail needs.
                        </p>
                        <button className="bg-[#ff6f3c] text-white text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded border border-[#ff6f3c] hover:bg-[#e65a1a] transition-colors" type="button">
                            Commission Your Wholesale Or Retail Statue
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full mt-5">
                <h1 className="text-[#0a3a5d] text-2xl font-semibold mb-4">Shaping History Through Sculpture</h1>
                <div className="relative w-full  flex items-center overflow-hidden m-5">
                    <button onClick={handlePrev} className=" bg-white p-2 m-4 rounded-full shadow">◀</button>
                    <div ref={carouselRef} className="flex gap-2 transition-transform duration-300" style={{ transform: `translateX(${translateX}px)` }}>
                        {images.map((image, i) => (
                            <img key={i} src={image.src} alt={image.alt} className="w-64 h-64 object-cover" />
                        ))}
                    </div>
                    <button onClick={handleNext} className="absolute right-2 bg-white p-2 rounded-full shadow">▶</button>
                </div>
            </div>

        </>
    );
};