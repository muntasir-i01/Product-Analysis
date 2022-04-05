import './Reviews.css'
import React, { useEffect, useState } from 'react';
import useReview from '../../hook/useReview';



const Reviews = () => {

    const [reviews, setReviews] = useReview();

    return (
        <div>
            <h2>Customers Opinion</h2>
            {
                reviews.map(review => <div className='review'>
                <h3>Car: {review.Car}</h3>
                <h3>Name: {review.first_name}</h3>
                <h3>Review: {review.Review}</h3>
                <h3>Rating: {review.Rating}</h3>
            </div> )
            }
        </div>
    );
};


export default Reviews;