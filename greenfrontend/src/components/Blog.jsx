import React from "react";
import { images7 } from "./Images";

const Blog = () => {
    const images=images7;
  return (
    <div className="Blog">
    <div className="blog-text">
        <h2>#Blog Yazılarım</h2>
    </div>
      <div className="gallery-container">
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
      </div>
    </div>
  );
};

export default Blog;
