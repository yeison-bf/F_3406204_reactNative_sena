import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { Sidebar } from './components/sidebar'
import { RoutesApp } from './routes/routes'

function App() {

  return (
    <>
      <RoutesApp/>
    </>
  )
}

export default App


