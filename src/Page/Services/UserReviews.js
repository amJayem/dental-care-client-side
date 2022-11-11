import React from 'react';

const UserReviews = ({rvw}) => {
    // console.log(rvw);
    const { rating, comment, email, service_id, _id} = rvw;
    return (
        <div className='border rounded-xl border-cyan-300 p-5 my-2'>
            <p>Comment: {comment}</p>
            <p>Rating: {rating}</p>
            <p>user: {email}</p>
            <p>service id: {service_id}</p>
            <p>{_id}</p>
        </div>
    );
};

export default UserReviews;