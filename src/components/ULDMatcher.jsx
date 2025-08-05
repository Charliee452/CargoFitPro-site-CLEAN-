
import React, { useState, useEffect } from 'react';
import uldData from '../data/ulds.json';

export default function ULDMatcher({ onULDSelect }) {
  const [dimensions, setDimensions] = useState({ length: '', width: '', height: '', airline: '' });
  const [matches, setMatches] = useState([]);

  const handleChange = (e) => setDimensions({ ...dimensions, [e.target.name]: e.target.value });

  const handleMatch = () => {
    const l = parseFloat(dimensions.length);
    const w = parseFloat(dimensions.width);
    const h = parseFloat(dimensions.height);
    const airline = dimensions.airline.trim().toLowerCase();
    const results = uldData.filter(uld => {
      const fitsDimensions = (w <= uld.dimensions_cm.width/100 && h <= uld.dimensions_cm.height/100 && l <= uld.dimensions_cm.length/100);
      const fitsAirline = airline === '' || uld.airlines.some(a => a.toLowerCase().includes(airline));
      return fitsDimensions && fitsAirline;
    });
    setMatches(results);
    if (onULDSelect && results.length > 0) {
      onULDSelect(results[0], [l, w, h]);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Find Matching ULD</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input type="number" name="length" placeholder="Length (m)" onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="width" placeholder="Width (m)" onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="height" placeholder="Height (m)" onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="airline" placeholder="Airline" onChange={handleChange} className="p-2 border rounded" />
      </div>
      <button onClick={handleMatch} className="bg-[#F75C1E] text-white px-4 py-2 rounded">Find ULDs</button>
      <div className="mt-6">
        {matches.length > 0 ? (
          <ul className="space-y-2">
            {matches.map((uld, i) => (
              <li key={i} onClick={() => onULDSelect(uld, [parseFloat(dimensions.length), parseFloat(dimensions.width), parseFloat(dimensions.height)])} className="border p-3 rounded bg-white cursor-pointer hover:bg-gray-200">
                <strong>{uld.code}</strong> - {uld.type}<br />
                Dimensions: {uld.dimensions_cm.length/100}×{uld.dimensions_cm.width/100}×{uld.dimensions_cm.height/100} m<br />
                Airlines: {uld.airlines.join(', ')}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-600 mt-4">No matches yet.</p>
        )}
      </div>
    </div>
  );
}
