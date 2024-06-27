import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

 const CustomPrevArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div className="custom-prev-arrow" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div className="custom-next-arrow" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };


const Slideshow = ({images}) => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="slideshow-container" style={{ position: 'relative' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
