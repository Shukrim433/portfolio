import { Outlet, useLocation } from "react-router-dom";
import HamburgerProvider from "./utils/HamburgerContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/App.css'

function App() {
  const location = useLocation()
  /* const isLandingPage = location.pathname === '/' */
  document.body.style.background = '#F9F5F0'; // beige
  return (
    <HamburgerProvider>
    <div className="App">
      {/* {!isLandingPage && <Header />} */}
      {/* Outlet component will conditionally show the appropriate page component based on the URL */}
      <Header />
      <div className="body">
        <Outlet />
      </div>
      <Footer />
      {/* {!isLandingPage && <Footer />} */}
    </div>
    </HamburgerProvider>
  );
}

export default App;
