import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Services/ServiceCard";

const Home = () => {
  const services = useLoaderData();
  return (
    <div className="my-20">
      <div className="text-center ">
        <p className="text-xl text-orange-600 font-bold font">Services</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
