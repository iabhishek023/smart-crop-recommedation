import React, { useState, useEffect } from 'react';
import { fetchSoilData } from '../api/apiService';
import './SoilAnalysis.css';

function SoilAnalysis() {
  const [soilData, setSoilData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSoilData = async () => {
      try {
        const data = await fetchSoilData();
        setSoilData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getSoilData();
  }, []);

  return (
    <div className="soil-analysis" id="soil-analysis">
      <h1>Soil Analysis</h1>
      {error && <p>Error: {error}</p>}
      {soilData ? (
        <div>
          <p>pH Level: {soilData.pH}</p>
          <p>Moisture: {soilData.moisture}%</p>
          <p>Recommended Crops: {soilData.recommendedCrops.join(', ')}</p>
        </div>
      ) : (
        <p>Loading soil data...</p>
      )}
    </div>
  );
}

export default SoilAnalysis;
