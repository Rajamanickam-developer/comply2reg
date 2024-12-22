
import { useState } from "react";
import "./App.css";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import  Navbar  from "./components/Navbar"
import { AboutUs } from "./pages/AboutUs";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar />
      <AboutUs />
    </>
  );
}

export default App;
