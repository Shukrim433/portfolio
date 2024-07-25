import "../../styles/NavBar.css";

export default function Navbar({ links }) {
  return (
    <nav className="navbar">
      <ul>
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </nav>
  );
}
