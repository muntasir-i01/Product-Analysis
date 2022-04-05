import React from 'react';
import './Navbar.css'
import { NavLink } from "react-router-dom";


const Navbar = () => {
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
        </div>
    );
};

export default Navbar;