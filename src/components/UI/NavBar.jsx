import { useRef } from "react";
import { useBurger } from "../../utils/HamburgerContext";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/NavBar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar({ links }) {
  const navigate = useNavigate()
  const { burgerClicked, setBurgerClicked } = useBurger();
  const navRef = useRef();
  /* console.log(burgerClicked, "NavBar comp"); */

  const toggleBurgerClick = () => {
    setBurgerClicked(true);
  };

  const toggleCloseClick = () => {
    setBurgerClicked(false);
  };

  const handleBurgerClick = () => {
    showNavbar();
    toggleBurgerClick();
  };

  const handleCloseClick = () => {
    showNavbar();
    toggleCloseClick();
  };
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h1 onClick={()=>navigate("/")}>Shukri Mohamed</h1>
      <nav ref={navRef} className="navbar">
        <ul>
          {links.map((link, index) => (
            <li key={index}> {link}</li>
          ))}
        </ul>
        <button className="nav-btn nav-close-btn" onClick={handleCloseClick}>
          {/* "X" ICON */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="x-icon size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>
      <button className="nav-btn " onClick={handleBurgerClick}>
        {/* MENU BARS ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="menu-icon size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
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
