import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>

      <Footer />
    </>
  );
}

export default App;
