import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import ReviewsAll from "../Reviews/ReviewsAll";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { service_id, title, img, price, description } = serviceDetails;

  // to submit a review
  const handleSubmitRating = (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value;
    const comment = form.comment.value;
    const email = form.email.value;
    const review = { rating, comment, email, service_id };
    // console.log(review);

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if(data.acknowledged){
            form.reset();
            toast.success('Review Submitted')
        }
      })
      .catch((e) => console.error("review submit error => ", e));
  };

  return (
    <div>
      
      <div>
        <h1 className="text-center font-semibold text-5xl">{title}</h1>
      </div>
      <div>
          <PhotoProvider>
              <PhotoView key={1} src={img}>
                <img src={img} alt="" />
              </PhotoView>
          </PhotoProvider>
        <p>{description}</p>
        <p className="font-semibold my-10">Price of this service: {price}</p>
      </div>
      <div>
        <Link className="btn btn-info text-white">Book your appointment</Link>
      </div>
      <div>
        <h2 className="text-center text-2xl font-semibold"><Link to='/all-reviews'>Reviews</Link></h2>
        
        <hr />
        {/* <ReviewsAll/> */}
      </div>
      <div>
        <form onSubmit={handleSubmitRating} className="grid grid-cols-1 mt-5">
          <input
            type="text"
            name="comment"
            className="textarea mb-5"
            placeholder="write a comment"
          />
          <input
            type="text"
            name="email"
            className="textarea mb-5"
            placeholder="your email"
            required
          />
          <div className=" my-10">
            <span>Give a rating: </span>
            <input
              type="number"
              name="rating"
              placeholder=" 1 2 3 4 5"
              className="w-xm"
            />
          </div>
          {/* <p>Review will be saved by: <b>{email}</b> this profile</p>
          <p>service id: {_id}</p> */}
          <button type="submit" className="btn btn-info text-white mt-10">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
