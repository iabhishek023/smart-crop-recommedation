import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [moisture, setMoisture] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [recommendedCrop, setRecommendedCrop] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple logic to recommend crops based on input
    let crop = '';
    if (moisture < 30 && temperature > 20 && humidity < 60) {
      crop = 'Corn';
    } else if (moisture > 30 && temperature > 15 && humidity > 50) {
      crop = 'Rice';
    } else if (moisture < 40 && temperature < 25 && humidity < 80) {
      crop = 'Wheat';
    } else {
      crop = 'Consider various crops based on local conditions.';
    }

    setRecommendedCrop(crop);
  };

  return (
    <div className="home" id="home">
      <h1 className="home-title">Welcome to Smart Crop Recommendation System</h1>
      <p className="home-description">Your one-stop solution for smart farming!</p>

      <form className="crop-input-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="moisture">Soil Moisture (%):</label>
          <input
            type="number"
            id="moisture"
            value={moisture}
            onChange={(e) => setMoisture(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="temperature">Temperature (°C):</label>
          <input
            type="number"
            id="temperature"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="humidity">Humidity (%):</label>
          <input
            type="number"
            id="humidity"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">Get Crop Recommendation</button>
      </form>

      {recommendedCrop && (
        <div className="recommendation">
          <h2 className="recommendation-title">Recommended Crop:</h2>
          <p className="recommendation-text">{recommendedCrop}</p>
        </div>
      )}
    </div>
  );
};

export default Home;


