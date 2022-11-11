import React from 'react';

const UserReviews = ({review}) => {
    // console.log(rvw);
    const { comment, email} = review;
    return (
        <div className='border rounded-xl border-cyan-300 p-5 my-2'>
            <p>Comment: {comment}</p>
            <p>user: {email}</p>
            <div>
            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-cyan-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-cyan-400" checked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-cyan-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-cyan-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-cyan-400" />
            </div>
            </div>
            {/* <p>service id: {service_id}</p> */}
        </div>
    );
};

export default UserReviews;