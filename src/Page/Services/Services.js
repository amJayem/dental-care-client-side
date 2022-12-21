import React from "react";
import { useLoaderData } from "react-router-dom";
import SetTitle from "../../hooks/setTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  SetTitle("All Services")
  const services = useLoaderData();
  // console.log(services);
  return (
    <div className="my-10">
      <div className="text-center ">
        <h1 className="text-5xl font-semibold">Browse Our Services</h1>
        <p className="mx-56 my-10">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
