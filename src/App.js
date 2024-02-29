import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import CustomerStories from "./components/sections/CustomerStories";
import Hero from "./components/sections/Hero";
import Imprint from "./components/sections/Imprint";
import NotFound from "./components/sections/NotFound";
import SourceCode from "./components/sections/SourceCode";
import Blog from "./components/sections/Blog"
import Work from "./components/sections/Work";
import LoadingScreen from "./components/layout/LoadingScreen";
import ProjectDetails from "./components/sections/ProjectDetails";
import Services from "./components/sections/Services";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <LoadingScreen />
        <Routes>
          <Route exact path="/" element={<>
            <Hero />
            <About />
            <Work />
            <Services/>
            <CustomerStories />
            <Contact />
            <SourceCode />
          </>} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
