import { Link } from "react-router-dom";
import Navbar from "./UI/NavBar";
import "../styles/Header.css";

export default function Header() {

  return (
    <header className="header">
      <div>
        <h1>Shukri Mohamed</h1>
      </div>
      <Navbar
        links={[
          <Link key={1} className="nav-link" to="/projects">
            Projects
          </Link>,
          <Link key={2} className="nav-link" to="/contact">
            Contact Me
          </Link>,
          <Link key={3} className="nav-link" to="/about">
            About Me
          </Link>,
        ]}
      />
    </header>
  );
}
