import React from 'react';
import './Dentists.css';
import Milin from '../../resources/doctor1.png';
import Salman from '../../resources/doctor2.png';
import Santa from '../../resources/doctor3.png';

const Dentists = () => {
    return (
        <>
            <section class="doctors-wrapper section-padding">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="section-title-one">
          <h1>Our Dentists</h1>
        </div>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-md-6 col-lg-4 col-12">
        <div class="single-doctor">
          <div class="doctor-profile">
            <img src={Milin} alt="" />
          </div>
          <div class="doctor-info">
            <h3>
              <a href="/Page/DentistDetails">Darry Milin</a>
            </h3>
            <span>Oral Surgeon</span>
          </div>
         
        </div>
      </div>
      <div class="col-md-6 col-lg-4 col-12">
        <div class="single-doctor">
          <div class="doctor-profile">
            <img src={Salman} alt="" />
          </div>
          <div class="doctor-info">
            <h3>
              <a href="/Page/DentistDetails">Salman Ahmed</a>
            </h3>
            <span>Oral Surgeon</span>
          </div>
         
        </div>
      </div>
      <div class="col-md-6 col-lg-4 col-12">
        <div class="single-doctor">
          <div class="doctor-profile">
            <img src={Santa} alt="" />
          </div>
          <div class="doctor-info">
            <h3>
              <a href="/Page/DentistDetails">Santa Binte</a>
            </h3>
            <span>Oral Surgeon</span>
          </div>
         
        </div>
      </div>
     
    </div>
  </div>
</section>
        </>
    );
};

export default Dentists;