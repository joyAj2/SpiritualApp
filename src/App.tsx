import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate, useLocation } from 'react-router-dom'
import { Section1Page, AboutPage, SignInPage, SignupPage } from './pages'
import AuthProvider, { useAuth } from './auth/AuthContext'
import gIcon from './assets/icons/G-icon.png'
import ellipseImg from './assets/icons/ellipse-1.png'

const Protected: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { user, loading } = useAuth()
  if (loading) return <div className="p-8">Loading...</div>
  if (!user) return <Navigate to="/login" replace />
  return children
}

const Layout: React.FC = () => {
  const location = useLocation()
  const isAuthRoute = location.pathname === '/signup'
  const isSection1 = location.pathname === '/'
  const { user, logout } = useAuth()
  const linkBase = 'px-3 py-2 rounded hover:bg-gray-200 text-sm font-medium'
  const active = 'bg-gray-300'
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {!isAuthRoute && (
        <header className={isSection1 ? '' : 'bg-white shadow'}>
          <nav className={`container mx-auto relative flex items-center gap-4 px-4 h-14 ${isSection1 ? '' : ''}`}>
            {user && (
              <NavLink to="/dashboard" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Dashboard</NavLink>
            )}
            <div className="ml-auto flex items-center gap-2">
              {!user && (
                <>
                  {/* Hide Sign Up on small screens, show from md+ */}
                  {isSection1 ? (
                    <div className="hidden md:flex" style={{ width: 81, height: 39, opacity: 1, border: '1px solid #14A58B', borderRadius: 8, paddingTop: 8, paddingRight: 12, paddingBottom: 8, paddingLeft: 12, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                      <NavLink to="/signup" style={{ fontSize: 14, padding: 0, lineHeight: '14px', color: '#14A58B' }} className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Sign Up</NavLink>
                    </div>
                  ) : (
                    <NavLink to="/signup" className={({isActive}) => `${linkBase} ${isActive ? active : ''} hidden md:inline-flex`} style={{ color: '#14A58B' }}>Sign Up</NavLink>
                  )}

                  {/* Mobile-only Sign Up icon at top-right */}
                  <div className="md:hidden" style={{ position: 'absolute', top: 8, right: 12, width: 64, height: 64, zIndex: 30 }}>
                    {/* Crescent background sized to container; opening faces downward */}
                    {/* Decorative ellipse image behind the G icon (mobile) */}
                    <img src={ellipseImg} alt="ellipse" style={{ position: 'absolute', top: 0, left: 0, width: 64, height: 64, zIndex: 10, pointerEvents: 'none' }} />
                    {/* Center the G icon inside the crescent */}
                    <NavLink to="/signup" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center" style={{ width: 36, height: 36, borderRadius: 8, zIndex: 20 }} aria-label="Sign Up">
                      <img src={gIcon} alt="Sign Up" className="w-6 h-6" />
                    </NavLink>
                      {/* Small decorative ellipse (8x8) positioned near the G icon; mobile-only and grouped */}
                      <div aria-hidden="true" style={{ position: 'absolute', bottom: -6, left: '50%', transform: 'translateX(-50%)', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#00B69D', zIndex: 40 }} />
                    </div>
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
      )}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Section1Page />} />
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