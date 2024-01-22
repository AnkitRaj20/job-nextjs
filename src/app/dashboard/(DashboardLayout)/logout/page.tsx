"use client"
import axios from 'axios';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  const logout = async() => {
    localStorage.removeItem('name');
    await axios.get('/api/users/logout');
    router.push('/employerLogin');
}
  useEffect(() => {
    logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default Page