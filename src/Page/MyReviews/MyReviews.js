import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

//   console.log(reviews);

  useEffect(() => {
    fetch(`http://localhost:5000/my-reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      })
      .catch((e) => console.error("reviews by email error => ", e));
  }, [user?.email]);

  // update review
  const handleUpdate = (id,e) =>{
    e.preventDefault();
    const form = e.target;
    const comment = form.updateComment.value;
    const rating = form.updateRating.value;
    const updateReview = {comment, rating};
    console.log(id,updateReview);

    // fetch(`http://localhost:5000/reviews/${id}`,{

    // })

  }

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
                <p>
                  service_id: <span>{review.service_id}</span>
                </p>
                <p>{review._id}</p>
              </div>
              <div>
                {/* The button to open modal */}
                <label htmlFor="my-modal-6" className="btn btn-warning">
                  Update
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-6"
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <form onSubmit={(e)=>handleUpdate(review._id, e)} className="modal-box">
                    <label
                      htmlFor="my-modal-6"
                      className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    
                    <p>Comment: <input className="text-xl font-semibold" type="text" name="updateComment"
                    defaultValue={review.comment}/></p>
                    <br />
                    <p>Rating: <input className="text-xl font-semibold" type="text" name="updateRating" defaultValue={review.rating} /></p>

                    <div className="modal-action">
                      <button type="submit" htmlFor="my-modal-6" className="btn btn-warning">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div>
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
