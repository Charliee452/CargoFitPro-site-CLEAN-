
import CargoPlanner3D from './components/CargoPlanner3D';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <header className="bg-[#0B2545] text-white p-6 text-center text-2xl font-bold">
        CargoFit Pro
      </header>
      <main className="flex-1 p-6 space-y-8">
        <h1 className="text-4xl font-bold mb-4">3D Cargo Planner</h1>
        <p>Visualize how your cargo fits inside a ULD container.</p>
        <CargoPlanner3D uldDimensions={[3,2,2]} boxDimensions={[0.5,0.5,0.5]} quantity={20} />
      </main>
      <footer className="bg-[#F75C1E] text-white p-4 text-center">
        &copy; 2025 CargoFit Pro
      </footer>
    </div>
  );
}
