import React from 'react'
import AuthPage from './pages/Auth'
import Dashboard from './pages/Dashboard'
import { useUser } from './hooks/useUser'

function App() {
  const user = useUser()

  if (user === null) return <AuthPage />
  return <Dashboard />
}

export default App
