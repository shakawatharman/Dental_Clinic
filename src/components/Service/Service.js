import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useService from "../../hooks/useService";

const Service = () => {
    const { serviceId } = useParams();
    const [services,setServices] = useState([]);

    useEffect(() => {
       fetch('/data.json')
           .then(res => res.json())
           .then(data => {
                setServices(data);
           })
           .catch(error=> console.log(error))
   }, [serviceId])

   
  
  const singleService = services.filter((service) => service.id === serviceId);
  console.log(services);
  

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <img style={{ width: "400px" }} src={singleService.image} alt="" />
            <h2>{singleService.name}</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur natus fuga quisquam nulla fugiat dignissimos, ipsum ea
              quasi porro eaque temporibus? Ea earum quae ullam expedita ipsa
              voluptatum iure quod reprehenderit ratione explicabo laudantium
              vitae ipsum quam, cupiditate aut necessitatibus corrupti odit
              mollitia, consequuntur quaerat aperiam est neque. Ipsa, tenetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
