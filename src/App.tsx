import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { HomePage, AboutPage, SignInPage, SignupPage } from './pages'
import AuthProvider, { useAuth } from './auth/AuthContext'

const Protected: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { user, loading } = useAuth()
  if (loading) return <div className="p-8">Loading...</div>
  if (!user) return <Navigate to="/login" replace />
  return children
}

const Layout: React.FC = () => {
  const { user, logout } = useAuth()
  const linkBase = 'px-3 py-2 rounded hover:bg-gray-200 text-sm font-medium'
  const active = 'bg-gray-300'
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow">
        <nav className="container mx-auto flex items-center gap-4 px-4 h-14">
          <NavLink to="/" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>About</NavLink>
          {user && (
            <NavLink to="/dashboard" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Dashboard</NavLink>
          )}
          <div className="ml-auto flex items-center gap-2">
            {!user && (
              <>
                <NavLink to="/login" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Sign In</NavLink>
                <NavLink to="/signup" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Sign Up</NavLink>
              </>
            )}
            {user && (
              <>
                <span className="text-sm text-gray-600">{user.email}</span>
                <button onClick={logout} className="text-sm text-red-600 font-medium px-3 py-2 rounded hover:bg-red-50">Logout</button>
              </>
            )}
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<SignInPage />} />
            <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Protected><div className='container mx-auto px-4 py-8'><h1 className='text-2xl font-bold mb-4'>Dashboard (Protected)</h1><p className='text-gray-600'>Only visible when logged in.</p></div></Protected>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
  {/** Footer removed per request **/}
    </div>
  )
}

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App