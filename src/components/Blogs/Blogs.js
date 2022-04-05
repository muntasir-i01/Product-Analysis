import './Blogs.css'
import React from 'react';
import { NavLink } from "react-router-dom";


const Blogs = () => {
    return (
        
        <div className='qa'>
            <p>Question: What is Context API? <br /> Answer: Context provides a way to pass data through the component tree without having to pass props down manually at every level. The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. Context API is useful for sharing data that can be considered global, such as the currently authenticated user, the theme settings for the application, and more. </p>
            <p>Question:What is Semantic tag? <br /> Answer: Elements such as header, footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them. The easier it is to read and understand that code, the easier it makes our job. It has greater accessibility.

</p>
        </div>
        
    );
};

export default Blogs;