import './App.css'
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
