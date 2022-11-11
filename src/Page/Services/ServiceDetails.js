import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import SetTitle from "../../hooks/setTitle";
import UserReviews from "./UserReviews";
import { AuthContext } from "../../Contexts/AuthProvider";

const ServiceDetails = () => {
  SetTitle('Service Details');
  const serviceDetails = useLoaderData();
  const { service_id, title, img, price, description } = serviceDetails;
  const { user } = useContext(AuthContext);
  const [refresh, setRefresh] = useState(false);
  const [review, setReview] = useState([]);

  // console.log(serviceDetails);

  // previous reviews to display
  useEffect(()=>{
    fetch('https://11-dental-care-server.vercel.app/reviews')
    .then(res=>res.json())
    .then(data=>{
      // console.log(data);
      setReview(data);
    })
    .catch(e=>console.error('review loading error => ',e));
  },[refresh]);

  // console.log('fetching review: ',review);

  // to submit a review
  const handleSubmitRating = (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value;
    const comment = form.comment.value;
    const email = form.email.value;
    const displayName = form.displayName.value;
    const photoURL = form.photoURL.value;
    const review = { comment, rating, email, service_id, title, price, img, photoURL, displayName };
    console.log(review);

    fetch("https://11-dental-care-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          form.reset();
          toast.success("Review Submitted");
          setRefresh(!refresh);
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
        <h2 className="text-center text-2xl font-semibold">
          <Link to="/all-reviews">Reviews</Link>
        </h2>
        <hr />
        <div>
          {
            review.filter(r=> r.service_id === service_id).map(review=>(
              <UserReviews
                key={review._id}
                review={review}
              ></UserReviews>
            ))
          }
        </div>
        {/* <ReviewsAll/> */}
      </div>
      <div>
        <form onSubmit={handleSubmitRating} className="grid grid-cols-1 mt-2">
          
          <input
            type="email"
            name="email"
            className="textarea mb-5"
            defaultValue={user?.email && `${user.email}`}
            readOnly
          />
          <div className=" my-2">
            <small className="ml-2">Give a rating: </small>
            <div className="rating">
              <input type="radio" name="rating" value='1' className="mask mask-star-2 bg-cyan-400" />
              <input type="radio" name="rating" value='2' className="mask mask-star-2 bg-cyan-400" defaultChecked />
              <input type="radio" name="rating" value='3' className="mask mask-star-2 bg-cyan-400" />
              <input type="radio" name="rating" value='4' className="mask mask-star-2 bg-cyan-400" />
              <input type="radio" name="rating" value='5' className="mask mask-star-2 bg-cyan-400" />
            </div>
            <br />
              <textarea
                type="text"
                name="comment"
                className="textarea mt-3"
                placeholder="write a comment"
                required
              />
              <input type="text" name='photoURL' defaultValue={user?.photoURL} hidden/>
              <input type="text" name='displayName' defaultValue={user?.displayName} hidden/>
          </div>
          {
            user?.email ?
          <button type="submit" className="btn btn-info text-white mt-5">
            Submit
          </button>
          :
          <Link to='/login' className="btn btn-warning mt-5">Login before review</Link>
          
          }
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
