import React from 'react';

const UserReviews = ({review}) => {
    // console.log(rvw);
    const { comment, rating} = review;
    return (
        <div className='border rounded-xl border-cyan-300 p-5 my-2'>
            <p><b>Comment: </b>{comment}</p>
            <div>
                <div className="rating">
                <input type="radio" value={rating} name="rating" className="mask mask-star-2 bg-cyan-400" />
                <input type="radio" value={rating} name="rating" className="mask mask-star-2 bg-cyan-400" defaultChecked />
                <input type="radio" value={rating} name="rating" className="mask mask-star-2 bg-cyan-400" />
                <input type="radio" value={rating} name="rating" className="mask mask-star-2 bg-cyan-400" />
                <input type="radio" value={rating} name="rating" className="mask mask-star-2 bg-cyan-400" />
                </div>
            </div>
            <p className='text-slate-500 mt-5'> {review?.displayName}</p>
            <img src={review?.photoURL} className='w-10 rounded-full' alt="" />
            {/* <p>service id: {service_id}</p> */}
        </div>
    );
};

export default UserReviews;