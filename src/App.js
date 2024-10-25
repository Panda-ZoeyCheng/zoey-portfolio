import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components-temp/NavBar";
import { Banner } from "./components-temp/Banner";
import { AboutMe } from "./components-temp/AboutMe";
import { Projects } from "./components-temp/Projects";
import { Contact } from "./components-temp/Contact";
import { Footer } from "./components-temp/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
