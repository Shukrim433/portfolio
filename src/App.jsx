import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      {/* Outlet component will conditionally show the appropriate page component based on the URL */}
      <div className="body">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
