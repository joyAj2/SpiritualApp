import React, { useState } from 'react'

interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string
  error?: string
  onChange?: (value: string) => void
  leftIcon?: React.ReactNode
  className?: string
}

const baseClasses = 'block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 text-sm transition-colors'
const normalBorder = 'border-[#14A58B] focus:ring-[#14A58B]/40 focus:border-[#14A58B]'
const errorBorder = 'border-red-500 focus:ring-red-500/40 focus:border-red-500'

export const TextInput: React.FC<TextInputProps> = ({ label, error, onChange, leftIcon, className = '', type = 'text', id, ...rest }) => {
  const inputId = id || rest.name || undefined
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={inputId} className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            {leftIcon}
          </span>
        )}
        <input
          id={inputId}
          type={type}
          className={`${baseClasses} ${error ? errorBorder : normalBorder} ${leftIcon ? 'pl-9' : ''} ${className}`}
          onChange={(e) => onChange?.(e.target.value)}
          {...rest}
        />
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
}

export const PasswordInput: React.FC<TextInputProps> = ({ leftIcon, className = '', onChange, ...rest }) => {
  const [show, setShow] = useState(false)
  return (
    <div className="mb-4">
      {rest.label && (
        <label htmlFor={rest.id || rest.name} className="block mb-1 text-sm font-medium text-gray-700">
          {rest.label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            {leftIcon}
          </span>
        )}
        <input
          id={rest.id || rest.name}
          type={show ? 'text' : 'password'}
          className={`${baseClasses} ${rest.error ? errorBorder : normalBorder} ${leftIcon ? 'pl-9' : ''} pr-10 ${className}`}
          onChange={(e) => onChange?.(e.target.value)}
          {...rest}
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute inset-y-0 right-2 flex items-center px-2 text-[#14A58B] hover:text-[#11806B] focus:outline-none"
          aria-label={show ? 'Hide password' : 'Show password'}
        >
          {show ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C5 20 1 12 1 12a21.77 21.77 0 0 1 5.06-6.94m4.37-2.17A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a21.9 21.9 0 0 1-2.16 3.19M9.9 9.9a3 3 0 0 0 4.2 4.2" />
              <line x1="2" y1="2" x2="22" y2="22" />
            </svg>
          )}
        </button>
      </div>
      {rest.error && <p className="mt-1 text-xs text-red-600">{rest.error}</p>}
    </div>
  )
}

export default TextInput
