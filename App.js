import Home from './components/Home';
import About from './components/About';
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Testimonial from './components/Testimonial';
import Work from './components/Work';
import './App.css';

function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <Contact/>
     <Footer/>
     <Testimonial/>
     <Work/>

    </div>
  );
}

export default App;
