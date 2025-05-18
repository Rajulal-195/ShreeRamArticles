import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const images = [
  "carousel.jpg",
  "https://theheritageartifacts.com/cdn/shop/collections/3765e3a233d07f8d8409c760bd346c07.jpg?v=1678684828",
  "https://webfiles.amrita.edu/2023/09/5AoPgx5F-amrita-shilpa-kalakshetra-program-banner.jpg",
  "https://www.ubuy.com.om/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFZbC1IRkEwRkwuX0FDX1NMMTUwMF8uanBn.jpg",
  "https://statues.com/wp-content/uploads/2020/08/About-Us-banner-1.jpg",
  "https://5.imimg.com/data5/SELLER/Default/2022/3/DT/OZ/KY/97787625/new-product.jpeg",
  "https://brewminate.com/wp-content/uploads/2018/08/081218-40-Architecture-Art-History-Myanmar-India-Southeast-Asia.jpeg",
];
export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Autoplay every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1500); // 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full max-w-1xl mx-auto overflow-hidden rounded shadow-lg">
      <div className="w-full x1:h-[550px] lg:h-500 h-[450px]">
        <img
          src={images[current]} 
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-fit transition-all duration-500"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white"
      >
        <ChevronRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

