import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
