import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  title?: string
  variant?: 'default' | 'plain'
}

const Card: React.FC<CardProps> = ({ children, className = '', title, variant = 'default' }) => {
  const base = variant === 'plain'
    ? 'p-0'
    : 'bg-white rounded-lg shadow-md p-6'

  return (
    <div className={`${base} ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      {children}
    </div>
  )
}

export default Card