import './HOME.css'
import React from 'react';

import { NavLink } from "react-router-dom";

const HOME = () => {
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
                <span className='client-review'>Client Reviews</span>
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