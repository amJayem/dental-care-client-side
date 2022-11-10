import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Services/ServiceCard";
import hero from "../../assets/hero-1.png";

const Home = () => {
  const services = useLoaderData();
  return (
    <div className="mt-10">
      <div className="hero bg-base-200 my-16">
        <img src={hero} alt="" className="blur-sm" />
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold text-white">
              Let's get started.
            </h1>
            <button className="btn btn-info my-10 text-white">
              Get Appointment
            </button>
          </div>
        </div>
      </div>
      <div className="text-center ">
        <p className="text-xl text-orange-600 font-bold mb-5">Services</p>
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
