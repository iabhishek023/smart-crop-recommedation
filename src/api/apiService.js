export const fetchSoilData = async () => {
    const response = await fetch('/mock/soilData.json');
    if (!response.ok) {
      throw new Error('Failed to fetch soil data');
    }
    return response.json();
  };
  
  export const fetchWeatherData = async () => {
    const response = await fetch('/mock/weatherData.json');
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    return response.json();
  };
  
  export const fetchCropSuggestion = async () => {
    const response = await fetch('/mock/cropSuggestion.json');
    if (!response.ok) {
      throw new Error('Failed to fetch crop suggestion data');
    }
    return response.json();
  };
  