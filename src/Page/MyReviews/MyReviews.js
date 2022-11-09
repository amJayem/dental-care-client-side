import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/my-reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      })
      .catch((e) => console.error("reviews by email error => ", e));
  }, [user?.email]);

  return (
    <div>
      <h1 className="text-5xl font-semibold">
        Your all reviews: {reviews.length}
      </h1>
      <p className="my-3">{reviews[0]?.email}</p>
      <div className="grid md:grid-cols-2 gap-3 sm:grid-cols-1">
        {reviews.map((review) => (
          <>
            <div className="border p-3 rounded-lg flex flex-col gap-3">
              <div>
                <h1>
                  Comment:{" "}
                  <span className="text-xl font-semibold">
                    {review.comment}
                  </span>
                </h1>
                <p>
                  Rating: <span>{review.rating}</span>
                </p>
              </div>
              <div>
                <button className="btn btn-warning mr-2">Update</button>
                <button className="btn btn-error">Delete</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
