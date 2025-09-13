import React from 'react'

interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string
  error?: string
  onChange?: (value: string) => void
}

const baseClasses = 'block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 text-sm transition-colors'
const normalBorder = 'border-[#14A58B] focus:ring-[#14A58B]/40 focus:border-[#14A58B]'
const errorBorder = 'border-red-500 focus:ring-red-500/40 focus:border-red-500'

export const TextInput: React.FC<TextInputProps> = ({ label, error, onChange, type = 'text', id, ...rest }) => {
  const inputId = id || rest.name || undefined
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={inputId} className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className={`${baseClasses} ${error ? errorBorder : normalBorder}`}
        onChange={(e) => onChange?.(e.target.value)}
        {...rest}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
}

export const PasswordInput: React.FC<TextInputProps> = (props) => (
  <TextInput {...props} type="password" />
)

export default TextInput
