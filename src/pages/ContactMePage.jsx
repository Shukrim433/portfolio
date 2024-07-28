import CV from "../assets/CV.pdf";
import PDF from "../imgs/PDF.png";
import "../styles/ContactMe.css";

export default function ContactMePage() {
  return (
    <div className="contact-me">
      <div className="cv-card">
        <img src={PDF} className="pdf-img"></img>
        <div className="cv-text">
          <button>
            <a href={CV} download="CV">
              Download my CV!
            </a>
          </button>
        </div>
      </div>
      <div className="contact-me-text">
      <p>Email: Shukrim433@gmail.com</p>
      <p> Github: github.com/Shukrim433/</p>
      </div>
    </div>
  );
}
