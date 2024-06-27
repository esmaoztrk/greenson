import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slicktrack = ({ images }) => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Initially show 4 items
    slidesToScroll: 4,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2, // Show 2 items on small screens
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="gallery-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <div className="gallery-img">
              <img src={image.imageUrl} alt={image.title} />
            </div>
            <div className="info">
              <h2>{image.title}</h2>
              <p>
                {image.description.length > 80
                  ? `${image.description.substring(0, 80)}...`
                  : image.description}
              </p>
              {image.description.length > 80 && (
                <a href="#" className="read-more">
                  DEVAMINI OKU
                </a>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slicktrack;
