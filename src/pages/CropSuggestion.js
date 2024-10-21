import React, { useState, useEffect } from 'react';
import { fetchCropSuggestion } from '../api/apiService';
import './CropSuggestion.css';

function CropSuggestion() {
  const [cropData, setCropData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCropSuggestion = async () => {
      try {
        const data = await fetchCropSuggestion();
        setCropData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getCropSuggestion();
  }, []);

  return (
    <div className="crop-suggestion" id="crop-suggestion">
    <h2 className="crop-title">Crop Suggestion</h2>
      {error && <p>Error: {error}</p>}
      {cropData ? (
        <div>
          <h3>Suggested Crops:</h3>
          <ul>
            {cropData.suggestions.map((crop, index) => (
              <li key={index}>{crop}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading crop suggestions...</p>
      )}
    </div>
  );
}

export default CropSuggestion;
