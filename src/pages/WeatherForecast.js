import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../api/apiService';
import './WeatherForecast.css';

function WeatherForecast() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);



  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchWeatherData();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getWeatherData();
  }, []);

  return (
    <div className="weather-forecast" id="weather-forecast">
    <h2 className="weather-title">Weather Forecast</h2>
      {error && <p>Error: {error}</p>}
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Recommended Crops: {weatherData.recommendedCrops.join(', ')}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default WeatherForecast;
