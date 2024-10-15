import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Container from "./Components/Container";
import { Route, Routes } from "react-router-dom"; // Import Route and Routes
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HashLink as Link } from "react-router-hash-link";
import { FaArrowUp } from "react-icons/fa";
import Welcome from "./Components/Welcome"; // Import the Welcome component

function App() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route
            path="/"
            element={
              <>
                <Container />
                <Hero />
              </>
            }
          />
        </Routes>
        <Link to="#top" smooth>
          <FaArrowUp className="topArrow fa-solid" />
        </Link>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
