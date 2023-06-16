import React from 'react'
import Slider from 'react-slick'
import './Slide.scss'



const Slide = ({ children, slidesToShow, arrowsScroll, speed, infinite,  }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} speed={speed} infinite={infinite} >
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide