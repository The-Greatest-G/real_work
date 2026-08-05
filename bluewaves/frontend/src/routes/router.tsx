import React from 'react'
import { createBrowserRouter } from '@tanstack/react-router'
import App from '../App'
import HomePage from './HomePage'
import ModePage from './ModePage'
import AboutPage from './AboutPage'

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { path: '/', element: <HomePage /> },
    { path: '/mode', element: <ModePage /> },
    { path: '/about', element: <AboutPage /> }
  ]}
])

export default router
