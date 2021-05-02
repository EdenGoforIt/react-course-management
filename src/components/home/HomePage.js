import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Course Management by Eden Park</h1>
    <p>Manage your course with Redux</p>
    <Link to="about" className="btn btn-primary btn-lg">
      About Us
    </Link>
  </div>
);
export default HomePage;
