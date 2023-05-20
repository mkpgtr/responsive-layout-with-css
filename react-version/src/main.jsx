import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NavProvider } from './contexts/NavContext.jsx'
import { AppProvider } from './contexts/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>

    <NavProvider>

    <App />
    </NavProvider>
    </AppProvider>
  </React.StrictMode>,
)
