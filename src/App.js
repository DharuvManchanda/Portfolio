import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Container from "./Components/Container";
import { Route, Routes } from "react-router-dom";
import Skills from "./Components/Container/Skills";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HashLink as Link } from "react-router-hash-link";
import { FaArrowUp } from "react-icons/fa";

function App() {
  return (
<>
<div className="wrapper">
      <Navbar />
      <Container />
      <Hero />
       <Routes>
      <Route path="/" element={Container} />
        <Route path="/contact/*" element={Skills} />
         </Routes>
         <Link to="#top" smooth>
<FaArrowUp className="topArrow fa-solid"/>     
 </Link>
           </div>
           <ToastContainer/>
</>

  );
}

export default App;
