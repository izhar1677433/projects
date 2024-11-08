import React from "react";
import aboutimage from "../Assets/about-background-image.png";
import aboutbackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={aboutbackground} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Welcome to our restaurant, where exceptional cuisine meets a warm and
          inviting atmosphere. Whether you're here for a casual meal with
          friends or a special celebration, our menu offers a diverse selection
          of dishes crafted with fresh, locally sourced ingredients. Each plate
          is a blend of flavors designed to delight your palate, from hearty
          classics to innovative, seasonal specials. Our team is dedicated to
          providing attentive service, ensuring that every visit feels like a
          memorable dining experience. Join us for a meal and enjoy the perfect
          balance of delicious food, a cozy ambiance, and outstanding
          hospitality.
        </p>
        <p className="primary-text">
          Food is not just a basic necessity; it’s a celebration of culture,
          tradition, and creativity. It brings people together, sparks
          conversation, and offers comfort and joy.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn more</button>
          <button className="watch-video-button">
            {" "}
            <BsFillPlayCircleFill />
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
