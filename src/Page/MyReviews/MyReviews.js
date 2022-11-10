import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";
import SetTitle from "../../hooks/setTitle";

const MyReviews = () => {
  SetTitle('My Reviews');

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
  // const handleUpdate = (id,e) =>{
  //   e.preventDefault();
  //   const form = e.target;
  //   const comment = form.updateComment.value;
  //   const rating = form.updateRating.value;
  //   const updateReview = {comment, rating};
  //   console.log(id,updateReview);

  //   fetch(`http://localhost:5000/reviews/${id}`,{

  //   })

  // };

  const handleDelete = id => {
    // console.log(id);
     const proceed = window.confirm('Are you want to delete?');
     if(proceed){
      // console.log(proceed);
      fetch(`http://localhost:5000/my-reviews/${id}`,{
        method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
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
                <button className="btn btn-warning">Update</button>
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
