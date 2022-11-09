import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const {title,img,price,description} = serviceDetails;
    return (
        <div>
            <div>
                <h1 className='text-center font-semibold text-5xl'>{title}</h1>
            </div>
            <div>
                <img src={img} alt="img" />
                <p>{description}</p>
                <p className='font-semibold my-10'>Price of this service: {price}</p>
            </div>
            <div>
                <Link className='btn btn-success' >Book your appointment</Link >
            </div>
            <div>
                <h2 className='text-center text-2xl font-semibold'>Reviews</h2>
            </div>
        </div>
    );
};

export default ServiceDetails;