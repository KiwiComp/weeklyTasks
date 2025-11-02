import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router'
import useWeeklyReset from './components/WeeklyReset'

function App() {

  useWeeklyReset();

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
