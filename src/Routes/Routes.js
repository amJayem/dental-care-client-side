import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Blog from '../Page/Blog/Blog';
import Home from '../Page/Home/Home';
import Login from '../Page/Login/Login';
import MyReviews from '../Page/MyReviews/MyReviews';
import Register from '../Page/Register/Register';
import ReviewsAll from '../Page/Reviews/ReviewsAll';
import AddService from '../Page/Services/AddService';
import ServiceDetails from '../Page/Services/ServiceDetails';
import Services from '../Page/Services/Services';
import PrivateRoute from './PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: ()=>fetch(`http://localhost:5000/home/`)
            },
            {
                path: '/services',
                element: <Services/>,
                loader: ()=>fetch('http://localhost:5000/services')
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: 'service-details/:id',
                element: <ServiceDetails/>,
                loader: ({params})=>fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: '/add-service',
                element: <PrivateRoute>
                    <AddService/>
                </PrivateRoute>
            },
            {
                path: '/all-reviews',
                element: <ReviewsAll></ReviewsAll>,
                loader: ()=>fetch('http://localhost:5000/reviews')
            },
            {
                path: 'my-reviews',
                element: <PrivateRoute>
                    <MyReviews/>
                </PrivateRoute>,
                // loader: ()=>fetch(`http://localhost:5000/my-reviews`)
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])