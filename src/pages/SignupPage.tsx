import React, { useState } from 'react'
import { Button, TextInput, PasswordInput, Card } from '../components'
import { useAuth } from '../auth/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const SignupPage: React.FC = () => {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    setLoading(true)
    const res = await signup(email, password)
    setLoading(false)
    if (!res.success) {
      setError(res.message || 'Signup failed')
      return
    }
    navigate('/')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h1>
      <Card>
        <form onSubmit={handleSubmit} className="max-w-md">
          <TextInput label="Email" name="email" value={email} onChange={setEmail} autoComplete="email" required />
          <PasswordInput label="Password" name="password" value={password} onChange={setPassword} autoComplete="new-password" required />
          <PasswordInput label="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={setConfirmPassword} autoComplete="new-password" required />
          {error && <p className="text-sm text-red-600 mb-2">{error}</p>}
          <Button className="w-full mt-2" variant="primary">
            {loading ? 'Creating...' : 'Sign Up'}
          </Button>
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-[#14A58B] hover:underline">Login</Link>
          </p>
        </form>
      </Card>
    </div>
  )
}

export default SignupPage
