import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SoilAnalysis from './pages/SoilAnalysis';
import WeatherForecast from './pages/WeatherForecast';
import CropSuggestion from './pages/CropSuggestion';
import ContactUs from './pages/ContactUs';
import About from './pages/About'; // Import About

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soil-analysis" element={<SoilAnalysis />} />
        <Route path="/weather-forecast" element={<WeatherForecast />} />
        <Route path="/crop-suggestion" element={<CropSuggestion />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} /> {/* Add About route */}
      </Routes>
    </Router>
  );
}

export default App;

