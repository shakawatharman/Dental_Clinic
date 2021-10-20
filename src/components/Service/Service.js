import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useService from "../../hooks/useService";

const Service = () => {
  const [services] = useService();
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const singleService = services.filter((service) => service.id == serviceId);
    setService(singleService[0]);
  }, [services]);

  console.log(service);

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <img
              className="m-auto"
              style={{ width: "400px" }}
              src={service?.image}
              alt=""
            />
            <h2 className="my-4">{service?.name}</h2>
            <p>{service?.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
