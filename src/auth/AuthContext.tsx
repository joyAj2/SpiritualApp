import React, { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import validateEmail from '../utils/validateEmail'

// Types
export interface User {
  id: string
  email: string
}

interface AuthContextValue {
  user: User | null
  loading: boolean
  signup: (email: string, password: string) => Promise<{ success: boolean; message?: string }>
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

// Local storage keys
const USERS_KEY = 'auth_users'
const SESSION_KEY = 'auth_session'

interface StoredUserRecord {
  id: string
  email: string
  passwordHash: string // In a real app you'd never store plain password
  createdAt: string
}

// Very naive hash (placeholder). DO NOT use in production.
const hash = (input: string) => {
  let h = 0
  for (let i = 0; i < input.length; i++) {
    h = (Math.imul(31, h) + input.charCodeAt(i)) | 0
  }
  return `h${h}`
}

const loadUsers = (): StoredUserRecord[] => {
  try {
    const raw = localStorage.getItem(USERS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

const saveUsers = (users: StoredUserRecord[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // Restore session
  useEffect(() => {
    try {
      const sessionRaw = localStorage.getItem(SESSION_KEY)
      if (sessionRaw) {
        const session = JSON.parse(sessionRaw) as { userId: string }
        const users = loadUsers()
        const found = users.find(u => u.id === session.userId)
        if (found) setUser({ id: found.id, email: found.email })
      }
    } finally {
      setLoading(false)
    }
  }, [])

  const signup = async (email: string, password: string) => {
    if (!validateEmail(email)) return { success: false, message: 'Invalid email format' }
    if (password.length < 6) return { success: false, message: 'Password must be at least 6 characters' }
    const users = loadUsers()
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, message: 'Email already registered' }
    }
    const newUser: StoredUserRecord = {
      id: crypto.randomUUID(),
      email,
      passwordHash: hash(password),
      createdAt: new Date().toISOString()
    }
    users.push(newUser)
    saveUsers(users)
    localStorage.setItem(SESSION_KEY, JSON.stringify({ userId: newUser.id }))
    setUser({ id: newUser.id, email: newUser.email })
    return { success: true }
  }

  const login = async (email: string, password: string) => {
    const users = loadUsers()
    const found = users.find(u => u.email.toLowerCase() === email.toLowerCase())
    if (!found) return { success: false, message: 'User not found' }
    if (found.passwordHash !== hash(password)) {
      return { success: false, message: 'Incorrect password' }
    }
    localStorage.setItem(SESSION_KEY, JSON.stringify({ userId: found.id }))
    setUser({ id: found.id, email: found.email })
    return { success: true }
  }

  const logout = () => {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
  }

  const value: AuthContextValue = { user, loading, signup, login, logout }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export default AuthProvider
