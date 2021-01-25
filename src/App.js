import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar/>
      <Slider/>
    </div>
  );
}

export default App;
