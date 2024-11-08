import React from "react";
import Pic from "../Assets/Pic.ico";
import { AiFillStar } from "react-icons/ai";
const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">Why They are saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
          corporis.
        </p>
        <div className="testimonail-section-bottom">
          <img src={Pic} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, odio!
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>IZHAR</h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
