import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Error404 from "./pages/Error404";
import ProjectDetail from "./components/Portfolio/ProjectDetail";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog"
import Services from "./pages/Services";
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"

function App() {
  //aos animation configuration

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 10,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/portfolio" element={ <Portfolio/>} />
          <Route path="/blog" element={ <Blog/>} />
          <Route path="/services" element={ <Services/>} />
          <Route path="/contact" element={ <Contact/>} />
          <Route path="/resume" element={ <Resume/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
