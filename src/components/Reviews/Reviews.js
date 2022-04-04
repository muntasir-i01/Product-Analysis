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
                reviews.map(review => console.log(review))
            }
        </div>
    );
};

function ClientReview() {
    return(
        <div>
            <h4>Car: {Car}</h4>
            <h3>Name: {first_name}</h3>
            <h3>Review: {Review}</h3>
            <h3>Rating: {Rating}</h3>
        </div>
    )
}

export default Reviews;