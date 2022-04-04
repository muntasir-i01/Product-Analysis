import React from 'react';
import './About.css'
import { NavLink } from "react-router-dom";


const About = () => {
    return (
        <div className='about-css'>
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
            <p></p>
        </div>
            <h2>Established: 2021</h2>
            <h3>Contact no: (707)000000 </h3>
            <h3>Email: carbd@mycar.com</h3>
        </div>
    );
};

export default About;