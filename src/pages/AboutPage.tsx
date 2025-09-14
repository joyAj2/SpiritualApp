import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About</h1>
      <div className="prose max-w-none">
        <p className="text-gray-600">
          This project is built with modern web technologies for optimal performance and developer experience.
        </p>
      </div>
    </div>
  )
}

export default AboutPage