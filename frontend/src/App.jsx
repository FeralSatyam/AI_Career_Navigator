import './App.css'
import LandingPage from './pages/LandingPage'
import SignUpPage from './pages/SignUpPage'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className='w-full min-h-screen bg-[#F5EAD8]'>
        <BrowserRouter>
          <Navbar></Navbar>
        </BrowserRouter>
        {/* <LandingPage></LandingPage> */}
       
        <SignUpPage></SignUpPage>
  
    </div>

  )
}

export default App
