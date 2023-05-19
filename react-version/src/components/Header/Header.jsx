import React, { useEffect, useState } from 'react'
import './Header.css'
import Navigation from '../Navigation/Navigation'
const Header = () => {
  const [theme,setTheme] = useState('light-theme')

  const toggleTheme = ()=>{
    if(theme==='light-theme'){
      setTheme('dark-theme')
    }else{
      setTheme('light-theme')
    }
  }

  useEffect(()=>{
    document.documentElement.className = theme
  },[theme])
  return (
    <header>
    <div class="top-section">
     <h1 class="main-heading">Joy of Writing Pure CSS <i class="fa-solid fa-pen-fancy"></i></h1>
   
     <div class="search">
       <input type="text"/>
       <i class="fa fa-search"></i>
     </div>
     <div className="theme-toggler"  onClick={toggleTheme}>{theme==='light-theme' ? <i class="fa-regular fa-moon"></i> : <i class="fa-regular fa-sun"></i>}</div>
     <div class="img-n-buttons">
       <div class="profile">
         <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="" />
       </div>
       <div class="buttons">
         <i class="fa-regular fa-bell notification"></i>
       </div>
     </div>
    </div>
     <Navigation />
 </header>
  )
}

export default Header