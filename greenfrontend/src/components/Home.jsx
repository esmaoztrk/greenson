import React from "react";
import Slideshow from "./Slideshow";
import Slider from "./Slider";
import { images, images2, images3, images4, images5, images7 } from "./Images";
import SliderGrid from "./Slidergrid";
import Products from "./Products";
import CursorPointer from "./Cursorpointer";
import Slicktrack from "./Slicktrack";
import { questions } from "./Questions";
import Promo from "./Promo";
import Feature from "./Feature";

const Home = () => {
  
  return (
    <div className="Home">
      <Promo/>
      <Slideshow images={images} />
      <Slider images={images3} />
      <Slideshow images={images2} />
      <Slider images={images4} />
      <SliderGrid />
      <Products/>
      <Slider images={images5} />
      <Slicktrack images={images7} />
      <Feature/>
      <CursorPointer questions={questions} />
      
    </div>
  );
};

export default Home;
