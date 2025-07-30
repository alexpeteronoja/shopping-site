import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import ProductCard from './ProductCard';
import { useEffect, useRef, useState } from 'react';

// Swiper Styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function RelatedProduct(props) {
  const cardProduct = props.cardProduct;
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const swiperRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevBtnRef.current &&
      nextBtnRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevBtnRef.current;
      swiperRef.current.params.navigation.nextEl = nextBtnRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView="2"
        navigation={false}
        onInit={swiper => (swiperRef.current = swiper)}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {cardProduct.slice(0, 5).map(item => (
          <SwiperSlide key={item.id}>
            <ProductCard
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image.image1}
              hoverdImage={item.image.image2}
              product={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={`transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10">
          <button
            ref={prevBtnRef}
            className="hover:bg-black hover:text-white w-10 h-10 rounded-full cursor-pointer border border-[black]"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10">
          <button
            ref={nextBtnRef}
            className="hover:bg-black hover:text-white w-10 h-10 rounded-full cursor-pointer border border-[black]"
          >
            <i className="fa-solid fa-arrow-right "></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RelatedProduct;
