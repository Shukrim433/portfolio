import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "../styles/LandingPage.css";

export default function LandingPage() {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const navigate = useNavigate();

  // after 7.5 seconds show the btn
  setTimeout(() => {
    setIsTypingComplete(true);
  }, 7600);

  const handleClick = () => {
    navigate("/projects");
  }
  /* document.body.style.background = '#f8f4e7'; // beige */

  return (
    <div className="landing-page">
      <div className="type-writer">
        <h1 style={{ color: "#2E0E02" }}>
          <Typewriter
            words={[
              "Hi, my name is Shukri Mohamed. I'm a full stack web developer and welcome to my portfolio!",
            ]}
            loop={1}
            typeSpeed={70}
            delaySpeed={1000}
          />
        </h1>
      </div>
      {isTypingComplete && (
        <div className="lets-go">
          <button className="landing-button" onClick={handleClick}>Let's go!</button>
        </div>
      )}
    </div>
  );
}
