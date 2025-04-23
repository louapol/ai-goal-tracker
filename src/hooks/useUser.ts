import { useState, useEffect } from 'react'

export const useUser = () => {
  const [user, setUser] = useState<null | { id: string; email: string }>(null)

  useEffect(() => {
    // For now, we'll just return null to show the auth page
    // In a real app, this would check for an existing session
    setUser(null)
  }, [])

  return user
}
