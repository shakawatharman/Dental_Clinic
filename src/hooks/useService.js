import { useEffect, useState } from "react";

const useService = (serviceId) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.log(error));
  }, [serviceId]);

  return [services];
};

export default useService;
