import { FaReact } from "react-icons/fa";
import "../styles/ImageSlider.css";
import { useState } from "react";

export default function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const gotToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="slider">
      <div className="left-arrow" onClick={goToPrevious}>
        {" "}
        ❰{" "}
      </div>
      <div className="rigth-arrow" onClick={goToNext}>
        {" "}
        ❱{" "}
      </div>
      <div
        className="img-slide"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        <p className="skill">
          <p>{slides[currentIndex].skill}</p>
          <span>
          {slides[currentIndex].icon}
          </span>
        </p>
      </div>
      <div className="dots-container">
        {slides.map((slide, slideIndex) => (
          <div
            className="dot"
            key={slideIndex}
            onClick={() => gotToSlide(slideIndex)}
          >
            {" "}
            ●{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

/* use div instead of img for the slide photos in the case of the imgs being diff sizes */
