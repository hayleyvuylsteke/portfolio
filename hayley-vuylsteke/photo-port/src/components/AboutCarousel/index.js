import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

function AboutCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img src="/Hayl1.jpg" className="d-block w-100" alt="My Family" />
          <Carousel.Caption>
            <h3>My Family</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="/travel.jpg" className="d-block w-100" alt="Annual Mexico Trip"/>
        <Carousel.Caption>
            <h3>Family Mexico Trip</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default AboutCarousel;