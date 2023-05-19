import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ThingsLearnt from './pages/ThingsLearnt/ThingsLearnt'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Hobbies from './pages/Hobbies/Hobbies'
import SharedLayout from './components/SharedLayout/SharedLayout'

function App() {

  return (
  <>

  <Header />
  <BrowserRouter>
    <Routes>

    <Route path='/' element ={ <SharedLayout />} > 
    
    
    <Route index  element={<ThingsLearnt />}/>
    <Route path='/hobbies'  element={<Hobbies />}/>
    </Route>
   
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
