import React, { useEffect, useState } from 'react';

const MyReviewsCard = ({review, handleUpdate}) => {
    const {comment, rating, service_id, _id} = review;

    const [updateReview, setUpdateReview] = useState({});

    useEffect(()=>{
        fetch(`https://11-dental-care-server.vercel.app/${service_id}`)
        .then(res=>res.json())
        .then(data=> setUpdateReview(data))
    },[service_id]); 

    console.log('updated review: ',updateReview);

    return (
            <div className="border p-3 rounded-lg flex flex-col gap-3">
              <div>
                <h1>
                  Comment:{" "}
                  <span className="text-xl font-semibold">
                    {comment}
                  </span>
                </h1>
                <p>
                  Rating: <span>{rating}</span>
                </p>
                <p>
                  service_id: <span>{service_id}</span>
                </p>
                <p>{_id}</p>
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
                  <form onSubmit={(e)=>handleUpdate(_id, e)} className="modal-box">
                    <label
                      htmlFor="my-modal-6"
                      className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    
                    <p>Comment: <input className="text-xl font-semibold" type="text" name="updateComment"
                    defaultValue={comment}/></p>
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
    );
};

export default MyReviewsCard;