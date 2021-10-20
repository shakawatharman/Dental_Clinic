import React from "react";
import "./Dentists.css";
import Milin from "../../resources/doctor1.png";
import Salman from "../../resources/doctor2.png";
import Santa from "../../resources/doctor3.png";

const Dentists = () => {
  return (
    <>
      <section className="doctors-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="section-title-one">
                <h1>Our Dentists</h1>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-6 col-lg-4 col-12">
              <div className="single-doctor">
                <div className="doctor-profile">
                  <img src={Milin} alt="" />
                </div>
                <div className="doctor-info">
                  <h3>Darry Milin</h3>
                  <span>Oral Surgeon</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="single-doctor">
                <div className="doctor-profile">
                  <img src={Salman} alt="" />
                </div>
                <div className="doctor-info">
                  <h3>Salman Ahmed</h3>
                  <span>Oral Surgeon</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="single-doctor">
                <div className="doctor-profile">
                  <img src={Santa} alt="" />
                </div>
                <div className="doctor-info">
                  <h3>Santa Binte</h3>
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
