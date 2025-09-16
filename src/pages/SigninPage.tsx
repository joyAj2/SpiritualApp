import React, { useState } from 'react'
import { Button, TextInput, PasswordInput, Card } from '../components'
import peopletalking from '../assets/peopletalking.png'
import emailIcon from '../assets/icons/email-icon.png'
import passwordIcon from '../assets/icons/password-icon.png'
import googleIcon from '../assets/icons/devicon_google.png'
import { useAuth } from '../auth/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const SignInPage: React.FC = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [rememberMe, setRememberMe] = useState(false)
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
  <div className="px-3 md:px-12 xl:px-20 py-4 min-h-[calc(100vh-3.5rem)] flex flex-col">
      <div className="max-w-[1250px] w-full mx-auto grid gap-0 md:gap-14 md:grid-cols-[567px_1fr] items-start flex-1">
        {/* Image section */}
        <div className="relative flex flex-col items-center md:items-start text-center md:text-left md:pt-[61px]">
          <div className="w-full flex justify-center md:block">
            <img
              src={peopletalking}
              alt="People talking"
              className="w-[286px] h-[370px] mx-auto md:mx-0 md:w-[567px] md:h-[709px] object-contain mb-0 md:mb-6"
              style={{ opacity: 1 }}
            />
          </div>
          {/* Mobile heading */}
          <div className="md:hidden">
            <h1 className="font-poppins text-[20px] font-semibold leading-none text-gray-800 mb-1">Welcome Back</h1>
            <p className="text-gray-500 text-xs leading-none">Sign in to your account</p>
          </div>
        </div>

  {/* Form section */}
  <div className="w-full max-w-[492px] -mt-6 md:mt-40 md:pt-[61px] md:ml-4">
          <div className="hidden md:block mb-6 px-4">
            <h1 className="font-poppins text-[20px] font-semibold leading-none text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-gray-500 text-sm leading-none">Sign in to your account</p>
          </div>
          <Card variant="plain">
            <form onSubmit={handleSubmit} className="space-y-4 p-4 mx-auto max-w-[492px] w-full">
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
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                leftIcon={<img src={passwordIcon} alt="" className="w-4 h-4" />}
                className="w-full h-[46px] rounded-lg border-2"
              />
              <div className="w-full flex items-center justify-between mt-2 mb-5 pt-0">
                <label className="flex items-center gap-2 text-xs text-gray-600 select-none cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-3.5 w-3.5 rounded border-gray-300 accent-[#14A58B] focus:ring-[#14A58B]"
                  />
                  <span style={{ fontWeight: 'bold', color:'black' }}>Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs font-medium text-[#14A58B] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="mt-8 pt-5">
                {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
                <Button className="w-full h-[46px] rounded-lg border-2 border-[#14A58B]" variant="primary">
                  {loading ? 'Signing in...' : 'Sign In'}
                </Button>
                <div className="mt-6 mb-4 flex items-center" aria-hidden="true">
                  <div className="flex-grow h-px bg-gray-200" />
                  <span className="mx-3 text-[10px] uppercase tracking-wide text-gray-400 font-medium">or</span>
                  <div className="flex-grow h-px bg-gray-200" />
                </div>
                <Button
                  type="button"
                  variant="secondary"
                  className="w-full h-[46px] rounded-lg border-2 relative text-sm font-medium"
                >
                  <span className="absolute inset-y-0 left-4 flex items-center">
                    <img src={googleIcon} alt="Google" className="w-4 h-4" />
                  </span>
                  <span className="block text-center w-full">Continue with Google</span>
                </Button>
                {/* Added explicit spacer for clearer separation from CTA */}
                <div className="h-8 md:h-8" aria-hidden="true" />
              </div>

              <p className="mt-4 md:mt-6 w-full font-poppins text-[16px] font-medium leading-none text-gray-700 text-center">
                <span className="font-poppins text-[16px] font-medium leading-none text-gray-400">Don't have an account? </span>
                <Link
                  to="/signup"
                  className="text-[#14A58B] font-medium underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
