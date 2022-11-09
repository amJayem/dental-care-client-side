import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const { _id, img,title,description} = service;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt={` img of ${title}`} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0,100)+ '...'}</p>
          <div className="card-actions justify-end">
            <Link to={`/service-details/${_id}`} className="btn btn-primary">Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
