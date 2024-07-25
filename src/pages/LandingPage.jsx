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
  document.body.style = "background: #fffcf2;"; // beige

  return (
    <div className="landing-page">
      <div className="type-writer">
        <h1 style={{ color: "#283618" }}>
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
          <button onClick={handleClick}>Let's go!</button>
        </div>
      )}
    </div>
  );
}
