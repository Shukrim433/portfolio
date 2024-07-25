import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/NavBar.css";

export default function Navbar({ links }) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h1>Shukri Mohamed</h1>

      <nav ref={navRef} className="navbar">
        <ul>
          {links.map((link, index) => (
            <a key={index}>{link}</a>
          ))}
        </ul>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn " onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

/* <FaTimes />  button to close nav bar on small screens */
/* <FaBars /> {/* button to open nav bar on small screens */
/* useRef hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.
 lets you reference a value that's not needed for rendering. */

/* showNavbar - each time this function is called, we will add or remove (toggle) the  
 the "responsive_nav" classname from the classList of the <nav> element
 */
// essentially a diff way of doing the use state showNave=false + toggle nav function

/* when your on a small screen you will only see the FaBars icon, when you click it
it adds the  "responsive_nav" className to the <nav> element, and the <nav> will take up the whole screen
and now the FaTimes icon is the only icon on the screen and when you click that it will remove the "responsive_nav"
from the <nav> element, returning back to normal screen*/
