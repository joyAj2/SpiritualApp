import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform duration-300">
          <img src={viteLogo} className="h-24 w-24 drop-shadow-lg" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform duration-300">
          <img src={reactLogo} className="h-24 w-24 animate-spin drop-shadow-lg" alt="React logo" />
        </a>
      </div>
      <h1 className="text-6xl font-black text-white mb-8 text-center drop-shadow-2xl">
        Vite + React + TypeScript + Tailwind
      </h1>
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/30">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          🚀 count is {count}
        </button>
        <p className="mt-6 text-white/90 text-lg">
          Edit <code className="bg-black/20 text-white px-3 py-1 rounded-lg font-mono">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-white/80 mt-8 text-lg">
        ✨ Click on the Vite and React logos to learn more
      </p>
      
      {/* Test different Tailwind classes */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-red-500 p-4 rounded-lg text-white font-bold">Red</div>
        <div className="bg-yellow-500 p-4 rounded-lg text-black font-bold">Yellow</div>
        <div className="bg-green-500 p-4 rounded-lg text-white font-bold">Green</div>
        <div className="bg-blue-500 p-4 rounded-lg text-white font-bold">Blue</div>
      </div>
    </div>
  )
}

export default App