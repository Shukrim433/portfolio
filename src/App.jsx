import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/App.css'

function App() {
  const location = useLocation()
  const isLandingPage = location.pathname === '/'
  document.body.style.background = '#f8f4e7'; // beige
  return (
    <div className="App">
      {!isLandingPage && <Header />}
      {/* Outlet component will conditionally show the appropriate page component based on the URL */}
      <div className="body">
        <Outlet />
      </div>
      {!isLandingPage && <Footer />}
    </div>
  );
}

export default App;
