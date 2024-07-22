import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation()
  const isLandingPage = location.pathname === '/'
  return (
    <>
      {!isLandingPage && <Header />}
      {/* Outlet component will conditionally show the appropriate page component based on the URL */}
      <div className="body">
        <Outlet />
      </div>
      {!isLandingPage && <Footer />}
    </>
  );
}

export default App;
