
import React, { useState } from 'react';

const ULD_DATABASE = [
  { code: 'AKE', name: 'LD-3', width: 153, height: 162, depth: 156, maxWeight: 1588, airlines: ['United', 'Delta', 'Emirates'] },
  { code: 'PMC', name: 'Pallet', width: 243, height: 160, depth: 317, maxWeight: 6800, airlines: ['American', 'Emirates', 'FedEx'] },
  { code: 'AMF', name: 'LD-11', width: 317, height: 243, depth: 160, maxWeight: 6000, airlines: ['Qatar', 'Delta', 'Lufthansa'] }
];

export default function ULDMatcher() {
  const [dimensions, setDimensions] = useState({ length: '', width: '', height: '', airline: '' });
  const [matches, setMatches] = useState([]);

  const handleChange = (e) => {
    setDimensions({ ...dimensions, [e.target.name]: e.target.value });
  };

  const handleMatch = () => {
    const l = parseFloat(dimensions.length);
    const w = parseFloat(dimensions.width);
    const h = parseFloat(dimensions.height);
    const airline = dimensions.airline.trim().toLowerCase();

    const results = ULD_DATABASE.filter(uld => {
      const fitsDimensions = (w <= uld.width && h <= uld.height && l <= uld.depth);
      const fitsAirline = airline === '' || uld.airlines.some(a => a.toLowerCase().includes(airline));
      return fitsDimensions && fitsAirline;
    });

    setMatches(results);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Find Matching ULD</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input type="number" name="length" placeholder="Length (cm)" onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="width" placeholder="Width (cm)" onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="height" placeholder="Height (cm)" onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="airline" placeholder="Airline (optional)" onChange={handleChange} className="p-2 border rounded" />
      </div>
      <button onClick={handleMatch} className="bg-[#F75C1E] text-white px-4 py-2 rounded">Find ULDs</button>

      <div className="mt-6">
        {matches.length > 0 ? (
          <ul className="space-y-2">
            {matches.map((uld, i) => (
              <li key={i} className="border p-3 rounded bg-white">
                <strong>{uld.name} ({uld.code})</strong><br />
                Dimensions: {uld.width}cm x {uld.height}cm x {uld.depth}cm<br />
                Max Weight: {uld.maxWeight} kg<br />
                Airlines: {uld.airlines.join(', ')}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-600 mt-4">No matches found yet.</p>
        )}
      </div>
    </div>
  );
}
