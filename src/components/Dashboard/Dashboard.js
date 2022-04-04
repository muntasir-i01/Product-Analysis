import './Dashboard.css'
import React from 'react';
import { NavLink } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
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
        </div>
    );
};

export default Dashboard;