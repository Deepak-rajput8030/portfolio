import Navbar from "./components/Navbar/Navbar";
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
