import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import SetTitle from "../../hooks/setTitle";

const MyReviews = () => {
  SetTitle('My Reviews');

  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  // console.log(reviews);

  useEffect(() => {
    fetch(`https://11-dental-care-server.vercel.app/my-reviews?email=${user?.email}`, {
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

  const handleDelete = id => {
    // console.log(id);
     const proceed = window.confirm('Are you want to delete?');
     if(proceed){
      // console.log(proceed);
      fetch(`https://11-dental-care-server.vercel.app/my-reviews/${id}`,{
        method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        // console.log(data);
        if(data.deletedCount > 0){
          toast('Deleted Successfully')
          const remaining = reviews.filter(r=>r._id !== id);
          setReviews(remaining);
        }
      })
      .catch(e=>console.error('delete error => ',e));
     };
  }

  return (
    <div>
      <h1 className="text-5xl font-semibold">
        <p>{reviews?.length ? `Your all reviews: ${reviews.length}` : 'No reviews were added'}</p>
      </h1>
      <p className="my-3">{reviews[0]?.email}</p>
      <div className="grid md:grid-cols-2 gap-3 sm:grid-cols-1">
        {reviews?.map((review) => (
          <>
            <div className="border p-3 rounded-lg flex flex-col gap-3">
              <div>
                <h1 className="text-xl font-semibold">{review.title}</h1>
                <h1>
                  Comment:{" "}
                  <span className="text-xl ">
                    {review.comment}
                  </span>
                </h1>
                <div>
                  Rating:
                    <div className="rating">
                      <input type="radio" name="rating" value={review.rating} className="mask mask-star-2 bg-cyan-400" />
                      <input type="radio" name="rating" value={review.rating} className="mask mask-star-2 bg-cyan-400"  />
                      <input type="radio" name="rating" value={review.rating} className="mask mask-star-2 bg-cyan-400" />
                      <input type="radio" name="rating" value={review.rating} className="mask mask-star-2 bg-cyan-400" />
                      <input type="radio" name="rating" value={review.rating} className="mask mask-star-2 bg-cyan-400" />
                  </div>
                
                </div>
              </div>
              <div>
                <button className="btn btn-warning">
                  <Link to={`/edit-my-review/${review._id}`}>Update</Link>
                </button>
                <button onClick={()=> handleDelete(review._id)} className="btn btn-error ml-2">Delete</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
