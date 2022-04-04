import './HOME.css'
import React, { useEffect, useState } from 'react';


import { NavLink } from "react-router-dom";

const HOME = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('Reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div>
            
            <div className="container">
            <NavLink
              exact = {true}
              activeClassName="is-active"
              to="/"              
            >
                Home
            </NavLink>
            <NavLink
              to="/reviews"
            >
                Reviews
            </NavLink>
            <NavLink
              exact = {true}
              activeClassName="is-active"
              to="/dashboard"
            >
                Dashboard
            </NavLink>
            <NavLink
            exact = {true}
            activeClassName="is-active"
              to="/blogs"
            >
              Blogs
            </NavLink>
            <NavLink 
            exact = {true}
            activeClassName="is-active"
              to="/about"
            >
              About
            </NavLink>
            </div>
            
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
                <span className='client-review'>Client Reviews(3)</span>

                {
                reviews.slice(0,3).map(review => <ClientReview key={review.id} Car={review.Car} first_name={review.first_name} 
                Review={review.Review} Rating={review.Rating}></ClientReview>)
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


function ClientReview(props) {
    const {Car, first_name, Review, Rating} = props;
    return(
        <div className='review-3'>
            <h3>Car: {Car}</h3>
            <h3>Name: {first_name}</h3>
            <h3>Review: {Review}</h3>
            <h3>Rating: {Rating}</h3>
        </div>
    )
}


export default HOME;