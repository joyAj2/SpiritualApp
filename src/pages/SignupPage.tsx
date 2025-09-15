import React, { useState } from 'react'
import { Button, TextInput, PasswordInput, Card } from '../components'
import peopletalking from '../assets/peopletalking.png'
import emailIcon from '../assets/icons/email-icon.png'
import userIcon from '../assets/icons/usericon.png'
import passwordIcon from '../assets/icons/password-icon.png'
// removed google button on signup, icon import no longer needed
import { useAuth } from '../auth/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const SignupPage: React.FC = () => {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
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
    <div className="px-3 md:px-10 xl:px-14 py-4 min-h-screen flex flex-col justify-center">
  <div className="max-w-[1250px] w-full mx-auto grid md:grid-cols-[567px_1fr] gap-12 items-center">
        {/* Image + mobile heading */}
  <div className="relative flex flex-col items-center md:items-start text-center md:text-left md:pt-[61px]">
          <div className="w-full flex justify-center md:block">
            <img
              src={peopletalking}
              alt="People talking"
              className="w-[286px] h-[370px] mx-auto md:mx-0 md:w-[567px] md:h-[709px] object-contain mb-0 md:mb-6"
              style={{ opacity: 1 }}
            />
          </div>
          <div className="md:hidden">
            <h1 className="font-poppins text-[20px] font-semibold leading-none text-gray-800 mb-1">Let's get started</h1>
            <p className="text-gray-500 text-xs leading-none">Sign up to create your account</p>
          </div>
        </div>
    {/* Form section */}
  <div className="w-full max-w-[492px] -mt-6 md:mt-36 md:ml-4">
          <div className="hidden md:block mb-5 px-4">
            <h1 className="font-poppins text-[20px] font-semibold leading-none text-gray-800 mb-2">Let's get started</h1>
            <p className="text-gray-500 text-sm leading-none">Sign up to create</p>
          </div>
          <Card variant="plain">
            <form onSubmit={handleSubmit} className="space-y-4 p-4 mx-auto max-w-[492px] w-full">
              <TextInput
                label="Username"
                name="username"
                value={username}
                onChange={setUsername}
                autoComplete="username"
                required
                placeholder="Enter your username"
                leftIcon={<img src={userIcon} alt="" className="w-4 h-4" />}
                className="w-full h-[46px] rounded-lg border-2"
              />
              <TextInput
                label="Email"
                name="email"
                value={email}
                onChange={setEmail}
                autoComplete="email"
                required
                placeholder="Enter your email"
                leftIcon={<img src={emailIcon} alt="" className="w-4 h-4" />}
                className="w-full h-[46px] rounded-lg border-2"
              />
              <PasswordInput
                label="Password"
                name="password"
                value={password}
                onChange={setPassword}
                autoComplete="new-password"
                required
                placeholder="Enter your password"
                leftIcon={<img src={passwordIcon} alt="" className="w-4 h-4" />}
                className="w-full h-[46px] rounded-lg border-2"
              />
              <PasswordInput
                label="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={setConfirmPassword}
                autoComplete="new-password"
                required
                placeholder="Confirm password"
                leftIcon={<img src={passwordIcon} alt="" className="w-4 h-4" />}
                className="w-full h-[46px] rounded-lg border-2"
              />
              {error && <p className="text-sm text-red-600 mb-2">{error}</p>}
              {/* Explicit spacer to create clear separation from fields */}
              <div className="h-1" aria-hidden="true" />
              <Button className="w-full h-[46px] rounded-lg border-2 border-[#14A58B]" variant="primary">
                {loading ? 'Creating...' : 'Sign Up'}
              </Button>
              <p className="mt-16 md:mt-20 w-full font-poppins text-[16px] font-medium leading-none text-gray-700 text-center">
                <span className="font-poppins text-[16px] font-medium leading-none text-gray-400">Already have an account?{' '}</span>
                <Link to="/login" className="text-[#14A58B] underline">Sign in</Link>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
