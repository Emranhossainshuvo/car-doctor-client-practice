// import { useEffect, useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
  // const [services, setServices] = useState([]);
  const services = useServices(); 
  // useEffect(() => {
  //   fetch("https://car-doctor-server-practice-ten.vercel.app/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  return (
    <div className="mt-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#FF3811]">Service</h3>
        <h2 className="text-5xl">Our service area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or <br /> randomised words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 mb-10 mg:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
