"use client"
import axios from 'axios';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
  const logout = async() => {
    await axios.get('/api/users/logout');
    alert('logged out');
    router.push('/employerLogin');
}
  useEffect(() => {
    logout();
  }, [])
}

export default page