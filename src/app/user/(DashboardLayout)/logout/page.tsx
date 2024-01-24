"use client"
import axios from 'axios';
import  { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  const logout = async() => {
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      localStorage.removeItem('name');
    }
    await axios.get('/api/users/logout');
    router.push('/login');
}
  useEffect(() => {
    logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default Page