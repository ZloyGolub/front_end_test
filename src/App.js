import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
