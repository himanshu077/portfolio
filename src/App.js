import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import CustomerStories from "./components/sections/CustomerStories";
import Hero from "./components/sections/Hero";
import Imprint from "./components/sections/Imprint";
import Services from "./components/sections/Services";
import SourceCode from "./components/sections/SourceCode";
import Work from "./components/sections/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <About />
      <Work/>
      <CustomerStories/>
      <Services/>
      <Contact/>
      <SourceCode/>
      <Footer/>
      <Imprint/>
    </div >
  );
}

export default App;
