import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const { _id, img,title,description} = service;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="bg-teal-50 rounded-lg">
          <PhotoProvider>
            <PhotoView key={1} src={img}>
              <img className="w-80 h-60" src={img} alt={` img of ${title}`} />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0,100)+ '...'}</p>
          <div className="card-actions justify-end">
            <Link to={`/service-details/${_id}`} className="btn btn-info text-white">Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
