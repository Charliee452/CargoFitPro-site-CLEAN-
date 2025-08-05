
import React, { useState } from 'react';
import ULDMatcher from './components/ULDMatcher';
import CargoPlanner3D from './components/CargoPlanner3D';

export default function App() {
  const [selectedULD, setSelectedULD] = useState(null);
  const [boxSize, setBoxSize] = useState([0.5, 0.5, 0.5]);

  const handleULDSelect = (uld, boxDims) => {
    setSelectedULD([uld.depth, uld.width, uld.height]); // use actual order L,W,H
    setBoxSize(boxDims.map(v => v / 100)); // convert cm to meters
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <header className="bg-[#0B2545] text-white p-6 text-center text-2xl font-bold">CargoFit Pro</header>
      <main className="flex-1 p-6 space-y-8">
        <h1 className="text-4xl font-bold mb-4">Smart ULD Matching + 3D Visualization</h1>
        <ULDMatcher onULDSelect={handleULDSelect} />
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">3D Cargo Planner</h2>
          <p className="mb-4">Visualize your selected ULD and cargo arrangement.</p>
          <CargoPlanner3D uldDimensions={selectedULD || [3,2,2]} boxDimensions={boxSize} quantity={20} />
        </section>
      </main>
      <footer className="bg-[#F75C1E] text-white p-4 text-center">&copy; 2025 CargoFit Pro</footer>
    </div>
  );
}
