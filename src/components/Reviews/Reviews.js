import './Reviews.css'
import React, { useEffect, useState } from 'react';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('Reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h2>Customers Opinion</h2>
            {
                reviews.map(review => <ClientReview key={review.id} Car={review.Car} first_name={review.first_name} 
                Review={review.Review} Rating={review.Rating}></ClientReview>)
            }
        </div>
    );
};

function ClientReview(props) {
    const {Car, first_name, Review, Rating} = props;
    return(
        <div className='review'>
            <h3>Car: {Car}</h3>
            <h3>Name: {first_name}</h3>
            <h3>Review: {Review}</h3>
            <h3>Rating: {Rating}</h3>
        </div>
    )
}

export default Reviews;