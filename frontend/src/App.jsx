import './App.css'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className='w-full h-full bg-[#F5EAD8]'>
        <BrowserRouter>
          <Navbar></Navbar>
        </BrowserRouter>
        <LandingPage></LandingPage>
    </div>

  )
}

export default App
