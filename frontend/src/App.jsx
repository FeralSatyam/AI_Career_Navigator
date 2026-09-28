import './App.css'
import LandingPage from './pages/LandingPage'
import SignUpPage from './pages/SignUpPage'
import Navbar from './components/Navbar'
import SignInPage from './pages/SignInPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='w-full min-h-screen bg-[#F5EAD8]'>
        <BrowserRouter>
          <Navbar></Navbar>

          <main className='content-area'>
            <Routes>
              <Route path='/' element={<LandingPage />}></Route>
              <Route path='/signup' element={<SignUpPage />}></Route>
              <Route path='/signin' element={<SignInPage />}></Route>
            </Routes>
          </main>

          
        </BrowserRouter>  
    </div>

  )
}

export default App
