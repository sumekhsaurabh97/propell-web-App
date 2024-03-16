import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/dashboard/home'

export default function HomeRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}
