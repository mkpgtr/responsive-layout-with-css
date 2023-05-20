import React, { useEffect } from 'react'
import './Navigation.css'
import { useNavContext } from '../../contexts/NavContext'
import { fixedSidebarLinks } from './data'
import {NavLink} from 'react-router-dom' 

const Navigation = () => {

  const {isSmallNavbarOpen,openSmallNavbar,closeSmallNavbar,screenSize,setScreenSize} = useNavContext()

  useEffect(()=>{
    const handleResize = ()=>setScreenSize(window.innerWidth)

    window.addEventListener('resize',handleResize)

    // ! get the initial window size 
    handleResize();

    return ()=> window.removeEventListener('resize',handleResize)
  },[])


useEffect(()=>{
  if(screenSize >= 768){
    closeSmallNavbar()
  }
},[screenSize])

  const toggleNavbar = ()=>{
    if (isSmallNavbarOpen) {
      closeSmallNavbar()
    }else{
      openSmallNavbar()
    }
  }
  return (
    <>
    <nav class="sidebar">
       <div class="about-me">
         <h2>About Me</h2>
         <ul class="AboutMeList">
         {fixedSidebarLinks.map((link)=>{ 
          return <NavLink to={`${link.path}`}><li key={link.id}>{link.text}</li></NavLink>
         })}
         </ul>
       </div>
     </nav>
     <nav class="smallScreen">
       <div class="toggle-n-logo">
         <span><i class="fa-solid fa-pen-fancy pen-logo"></i></span>
         <span class="small-nav-toggle" onClick={toggleNavbar}>
           <i class="fa-solid fa-bars toggle-btn"></i>
         </span>
       </div>
       <div class="sidenav">
         <ul class={`${isSmallNavbarOpen ? 'show' : 'hide'}`}>
           <li class="home-link">Home</li>
           <li>About</li>
           <li>Projects</li>
           <li>Education</li>
           <li>Opinions</li>
           <li>Skills</li>
           <i class="close-icon" onClick={closeSmallNavbar}>
             <i class="fa-solid fa-times small-nav-close-btn"></i>
           </i>
         </ul>
       </div>
     </nav>
 <nav class="largeScreen">
   <ul>
     <NavLink to='/'><li>Home</li></NavLink>
     <li>Charts</li>
     <li>Projects</li>
     <li>Trivia</li>
     <li>Login/Register</li>
   </ul>
 </nav>
    </>
  )
}

export default Navigation