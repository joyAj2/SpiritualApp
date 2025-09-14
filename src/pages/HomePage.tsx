import React from 'react'
import { Card } from '../components'

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to NOM-FE</h1>
      <Card title="Getting Started">
        <p className="text-gray-600">
          This is a React + TypeScript + Vite + Tailwind CSS project.
        </p>
      </Card>
    </div>
  )
}

export default HomePage