import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../Services/ServiceCard";
import hero from "../../assets/hero-1.png";
import SetTitle from "../../hooks/setTitle";

const Home = () => {
  const services = useLoaderData();
  SetTitle('Home');
  return (
    <div className="mt-10">
      <div className="hero my-16">
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
      <p className="text-center my-10">
        <Link to="/services" className="btn btn-info text-white">
          View all services
        </Link>
      </p>
      <div className="text-center border border-cyan-300 p-5 rounded-lg">
        <p className="md:text-2xl sm:text-xl my-2">REPAIR & REPLACE TEETH</p>
        <h1 className="md:text-5xl sm:text-2xl my-5 font-semibold">
          {" "}
          PROSTHODONTIC SERVICES
        </h1>
        <hr />
        <p className="my-2">
          If you have missing or damaged teeth, the team at Lake Bluff Dental is
          here to help with quality prosthodontic solutions. You are offered a
          wide variety of treatments including cosmetic procedures, fixed and
          removable restorations, and dental implants. Dr. Griffin has extensive
          training and the creativity to envision the final goal of any
          treatment. Our team will work tirelessly with you to develop a highly
          personalized plan to get you to your final goal.
        </p>
      </div>
      <h1 className="text-center font-bold text-4xl mt-20">Gentle, friendly treatment </h1>
      <div className="grid  sm:grid-cols-1 md:grid-cols-3 gap-4 my-10">
        <div className="card w-56 bg-base-100 shadow-xl ">
          <div className="card-body">
              01. <br />
              <p><b>Tight Schedule? No worries!</b></p>
            <p> 
               We offer comprehensive dentistry five
              days a week, and are ready for emergency treatment when you need
              it.
            </p>
          </div>
        </div>
        <div className="card w-56 bg-base-100 shadow-xl ">
          <div className="card-body">
              02. <br />
              <p><b>Committed to Safety</b></p>
            <p>
               With health screening, sanitization, enhanced
              PPE, and more we’re prioritizing your safety at every step.{" "}
            </p>
          </div>
        </div>
        <div className="card w-56 bg-base-100 shadow-xl">
          <div className="card-body">
              03. <br />
              <p><b>Smiles Without Stress</b></p>
            <p> 
               You'll love your smile and your visit, too!
              Our friendly team will help you leave feeling comfortable and
              confident.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
