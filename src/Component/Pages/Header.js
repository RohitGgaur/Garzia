import React, { useState } from 'react';
import img3 from "../../assenst/header.jpg";
import img2 from "../../assenst/g1.jpg";
// import img3 from "../../assenst/slider_04.webp";
import img1 from "../../assenst/slider_05.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import LazyLoad from 'react-lazyload';
import './header.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ClipLoader from 'react-spinners/ClipLoader'; // Import ClipLoader spinner

const swiperStyle = {
  width: '100vw', // Full width of the viewport
  height: '100vh', // Full height of the viewport
};

const slideContent = [
  { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum", buttonText: "Learn More" },
  { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum", buttonText: "Explore" },
  { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum", buttonText: "Get Started" }
];

const images = [img1, img2, img3];

export const Header = () => {
  const [loading, setLoading] = useState(Array(images.length).fill(true)); // Initial loading state for each image

  const handleImageLoad = (index) => {
    const updatedLoading = [...loading];
    updatedLoading[index] = false; // Set loading to false once the image loads
    setLoading(updatedLoading);
  };

  return (
    <Swiper
      style={swiperStyle}
      loop={true} // Enable loop mode
      autoplay={{ delay: 4000, disableOnInteraction: false }} // Auto-play with 4-second delay
      pagination={{ clickable: true }} // Enable pagination
      navigation={true} // Enable navigation (next/prev buttons)
      modules={[Navigation, Pagination, Autoplay]}
      data-aos="fade-up" data-aos-duration="1000" // Load Swiper modules
    >
      {slideContent.map((slide, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <LazyLoad height={600} offset={100}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              {loading[index] && (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                  }}
                >
                  {/* Add a ClipLoader spinner for loading */}
                  <ClipLoader
                    color="#36d7b7"
                    loading={loading[index]}
                    size={50} // You can adjust the size of the loader
                    speedMultiplier={1} // Adjust the animation speed
                  />
                </div>
              )}
              <img
                src={images[index]}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: loading[index] ? 'none' : 'block', // Hide image while loading
                }}
                onLoad={() => handleImageLoad(index)} // Set loading to false once the image loads
              />
              <div className="slide-overlay alice-regular">
                <p className="slide-text">{slide.text}</p>
                <button className="slide-button">{slide.buttonText}</button>
              </div>
            </div>
          </LazyLoad>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
