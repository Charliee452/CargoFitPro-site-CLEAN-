
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <header className="bg-[#0B2545] text-white p-6 text-center text-2xl font-bold">
        CargoFit Pro
      </header>
      <main className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-4">Smart ULD Matching for Your Cargo</h1>
        <p className="mb-4">Enter your box dimensions and visualize the best-fit ULD containers — fast and easy.</p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Membership</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>$19.99/month</li>
            <li>$199.99/year</li>
          </ul>
        </div>
      </main>
      <footer className="bg-[#F75C1E] text-white p-4 text-center">
        &copy; 2025 CargoFit Pro • Follow us on Facebook, Instagram, TikTok
      </footer>
    </div>
  )
}
