import './HOME.css'
import React, { useEffect, useState } from 'react';


import { NavLink } from "react-router-dom";
import useReview from '../../hook/useReview';

const HOME = () => {
    const [reviews, setReviews] = useReview();

    /* useEffect( () => {
        fetch('Reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []) */
        return (
        <div>
            
            <div className='home'>
                <div className='car'>
                    <img src="car.png" alt="" width="80%"/>
                </div>
                <div>
                    <h1 className='h-1'>Choose Your Best Car</h1>
                    <h1 className='h-2'>For Better Time On Road</h1>
                </div>

                
            </div>
            <button className='btn'>Live Collection</button>

            <div>
                <span className='client-review'>Client Reviews(3) <br />
                
                </span>

                {
                reviews.slice(0,3).map(review => 
                    <div className='review-3'>
            <h3>Car: {review.Car}</h3>
            <h3>Name: {review.first_name}</h3>
            <h3>Review: {review.Review}</h3>
            <h3>Rating: {review.Rating}</h3>
        </div> )
            }

                <NavLink 
              to="/reviews"
            >
                <button className='btn-2'>See All Review</button>
            </NavLink>
            </div>
        </div>
    );
};

export default HOME;