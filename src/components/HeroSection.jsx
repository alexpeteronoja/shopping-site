import { useEffect, useState } from 'react';
import slideData from '../data/slideData';

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slideData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideData.length]);
  return (
    <div>
      <div className="bg-[#f5f5f5] relative grid md:grid-cols-2 gap-x-4 md:px-10">
        <div className="order-2 md:order-1 heading flex flex-col items-center md:items-start text-center md:text-start my-auto bg-white md:bg-inherit py-10 md:py-0 px-3 md:px-0">
          <p className="text-base md:text-xl">
            {slideData[currentSlide].arrival}
          </p>
          <p className="text-3xl  md:text-7xl  py-4 md:py-7">
            {slideData[currentSlide].collections}
          </p>

          <div>
            <a href="">
              <button className="border py-2.5 px-7 rounded-md cursor-pointer hover:bg-black hover:text-white">
                Shop Now
              </button>
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 relative overflow-hidden h-90 md:h-auto">
          <img
            src={slideData[currentSlide].img}
            alt=""
            className="w-full h-full max-w-90 object-cover object-top mx-auto"
          />
        </div>

        <div className="absolute right-1/2 md:right-5 top-79 md:top-1/2 z-1 flex md:flex-col space-x-3 space-y-3">
          {slideData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 md:w-3 h-4 md:h-3 rounded-full cursor-pointer border border-black ${index === currentSlide ? 'bg-black' : 'bg-transparent'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
