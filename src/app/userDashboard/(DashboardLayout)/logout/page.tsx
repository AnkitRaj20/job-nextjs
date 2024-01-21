"use client"
import axios from 'axios';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
  const logout = async() => {
    localStorage.removeItem('name')
    await axios.get('/api/users/logout');
    router.push('/login');
}
  useEffect(() => {
    logout();
  }, [])
}

export default page