import CV from "../assets/CV.pdf";
import PDF from "../imgs/PDF.png";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import "../styles/ContactMe.css";

export default function ContactMePage() {
  return (
    <div className="contact-me">
      <div className="contact-header">
        <h2>
          {" "}
          <b>
            {" "}
            <i>Get in touch with me: </i>
          </b>
        </h2>
      </div>

      <div className="cv-card">
        

        <div className="cv-text">
          <button>
            <a href={CV} download="CV">
              Download my CV
            </a>
          </button>
        </div>

        <div className="contact-me-text">
        <p>
          <b>
            <MdOutlineEmail /> Shukrim433@gmail.com{" "}
          </b>
        </p>
        <p>
          <b>
            <a href="www.linkedin.com/in/shukri-mohamed-5bb482283">
              {" "}
              <CiLinkedin /> LinkedIn
            </a>{" "}
          </b>
        </p>
      </div>
      </div>
      
    </div>
  );
}
