"use client"
import axios from 'axios';
import React from 'react'

const page = () => {
    const logout = async() => {
        await axios.get('/api/users/logout');
        alert('logged out');
        // router.push('/login');
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <button className="bg-blue-500 hover:bg-blue-800 text-white p-5 mt-3 rounded" onClick={logout}>
                LogOut
            </button>
    </div>
  )
}

export default page