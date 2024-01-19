// Import necessary libraries and styles
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import feedback from "./testimonials.json";

// FeedbackSlider component
const FeedbackSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="feedback-slider">
      <Slider {...settings}>
        {feedback.map((getFeedback) => (
          <div key={getFeedback.id} className="feedback-item">
            <img
              className="cards-img"
              src={getFeedback.imgSrc}
              alt={getFeedback.author}
            />
            <p className="rating">⭐{getFeedback.rating}</p>
            <h2>{getFeedback.author}</h2>
            <h3>{getFeedback.content}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackSlider;
