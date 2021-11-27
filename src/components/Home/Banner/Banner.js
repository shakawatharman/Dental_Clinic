
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';


const Banner = () => {
    return (
       <div className="container-fluid mb-5">
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 banner-image"
      src="https://i.ibb.co/4VpFnLb/getimage-ashx-idmf-47e97e00-bd2c-4619-af6d-03bf953c557b-w-1200-h-350-f-1-cf-chl-captcha-tk.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Introducing Safe Smiles</h3>
      <p>Introducing Safe Smiles - new campaign set to champion the benefits of safe dentistry</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner-image"
      src="https://i.ibb.co/Xtbgc9L/getimage.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>The Oral Health Podcast</h3>
      <p>Listen to bite-size discussions with industry leaders about how to improve your oral health.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner-image"
      src="https://i.ibb.co/pjDsQ6C/getimage.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Dental care and coronavirus (COVID-19)</h3>
      <p>Dental practices in the in the UK are open, following a short period of enforced closure last year.  For a dental practice to treat you, they will need fully compliant PPE, exercise social distancing measures and apply appropriate cross-infection control.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       </div>
    );
};

export default Banner;