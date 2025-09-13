import React, { useState } from 'react'
import { Button, TextInput, PasswordInput, Card } from '../components'
import { useAuth } from '../auth/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage: React.FC = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const res = await login(email, password)
    setLoading(false)
    if (!res.success) {
      setError(res.message || 'Login failed')
      return
    }
    navigate('/')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome back</h1>
      <p className="text-1xl  text-gray-500 mb-6">Sign in to your account</p>
      <Card>
        <form onSubmit={handleSubmit} className="max-w-md">
          <TextInput label="Email" name="email" value={email} onChange={setEmail} autoComplete="email" required />
          <PasswordInput label="Password" name="password" value={password} onChange={setPassword} autoComplete="current-password" required />
          {error && <p className="text-sm text-red-600 mb-2">{error}</p>}
          <Button className="w-full mt-2" variant="primary" >
            {loading ? 'Logging in...' : 'Login'}
          </Button>
          <p className="mt-4 text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-[#14A58B] hover:underline">Sign up</Link>
          </p>
        </form>
      </Card>
    </div>
  )
}

export default LoginPage
