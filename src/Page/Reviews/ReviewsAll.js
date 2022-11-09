import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReviewsAll = () => {
    //   displaying all reviews
    const reviews = useLoaderData();
    // console.log(reviews);
    return (
        
        <div>
          {reviews.map((review) => (
            <>
              <div className="card my-10 bg-base-100 shadow-xl">
                <div className="card-body">
                  <p>Comment: {review.comment}</p>
                  <p>Rating: {review.rating}</p>
                  <p><small className="text-slate-300">{review.email}</small></p>
                </div>
              </div>
            </>
            ))}
        </div>
    );
};

export default ReviewsAll;