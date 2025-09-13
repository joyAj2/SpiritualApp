import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '' 
}) => {
  const baseClasses = 'px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-60 disabled:cursor-not-allowed'
  const variantClasses = {
    primary: 'bg-[#14A58B] hover:bg-[#129179] text-white focus:ring-[#14A58B]/50',
    secondary: 'bg-white border border-[#14A58B] text-[#14A58B] hover:bg-[#14A58B] hover:text-white focus:ring-[#14A58B]/50'
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button