import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Dashboard from "./components/Dashboard/Dashboard";
import HOME from "./components/HOME/HOME";
import NotFound from "./components/NotFound/NotFound";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div>
   
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
