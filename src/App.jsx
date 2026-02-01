import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import DeltaProjects from "./pages/Projects/Delta";


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
        <Route path="/projects" element={<Projects />} />
  <Route path="/projects/:id" element={<ProjectDetails />} />
  <Route path="/projects/delta" element={<DeltaProjects />} />
  



      </Routes>

      <Footer />
    </>
  );
}

export default App;
