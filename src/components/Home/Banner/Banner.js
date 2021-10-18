import treatment from "../../../resources/banner2.png"
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';


const Banner = () => {
    return (
       <div className="container">
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 banner-image"
      src={treatment}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner-image"
      src={treatment}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner-image"
      src={treatment}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       </div>
    );
};

export default Banner;