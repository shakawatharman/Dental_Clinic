import React from "react";
import useService from "../../hooks/useService";
import ServiceCard from "../ServiceCard/ServiceCard";
import { serviceData } from "../data/Data";

const Services = () => {
  // const [services] = useService();


  return (
    <div>
      <div className="container my-5">
        <h1 className="text-center my-5">Our Services</h1>
        <div className="row">
          {serviceData.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
