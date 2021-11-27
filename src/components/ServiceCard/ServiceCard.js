import React from "react";
import { useHistory } from "react-router";
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  const { id, name, image, description } = service;

  const history = useHistory();
  const handleService = () => {
    history.push(`/service/${id}`);
  };

  return (
    <>
      <div className="col-md-4 mb-3">
        <div className="service shadow">
          <div className="service-image">
            <img src={image} alt="" />
          </div>
          <div className="service-data text-center p-3">
            <h3 className="text-primary">{name}</h3>
            <p>{description}</p>
            <button onClick={handleService} className="btn btn-primary">
              See Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
