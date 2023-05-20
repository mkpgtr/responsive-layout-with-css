import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ThingsLearnt from './pages/ThingsLearnt/ThingsLearnt'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Hobbies from './pages/Hobbies/Hobbies'
import SharedLayout from './components/SharedLayout/SharedLayout'
import Education from './pages/Education/Education'
import Opinions from './pages/Opinions/Opinions'
import Skills from './pages/Skills/Skills'
import Gallery from './pages/Gallery/Gallery'
import OTPPage from './pages/OTPPage/OTPPage'

function App() {

  return (
  <>

  <BrowserRouter>
  <Header />
    <Routes>

    <Route path='/' element ={ <SharedLayout />} > 
    
    
    <Route index  element={<ThingsLearnt />}/>
    <Route path='/hobbies'  element={<Hobbies />}/>
    <Route path='/education'  element={<Education />}/>
    <Route path='/opinions'  element={<Opinions />}/>
    <Route path='/skills'  element={<Skills />}/>
    <Route path='/gallery'  element={<Gallery />}/>
    <Route path='/otp'  element={<OTPPage />}/>
    
    </Route>
   
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
