import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartPage from './pages/StartPage/StartPage'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router'

function App() {

  return (
    <main className='mainGrid'>
      <Header />
      <section className='mainContent'>
        <Outlet />
      </section>
      <Footer />
    </main>
  )
}

export default App
