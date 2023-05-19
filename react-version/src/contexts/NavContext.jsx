import React, { useContext, useState } from 'react'


const NavContext = React.createContext()

const NavProvider = ({children}) => {

  const [isSmallNavbarOpen,setIsSmallNavbarOpen] = useState(false)
  const [screenSize,setScreenSize] = useState(undefined)

  const closeSmallNavbar = ()=>{
    setIsSmallNavbarOpen(false)
  }

  const openSmallNavbar = ()=>{
    setIsSmallNavbarOpen(true)
  }
  return (
  <NavContext.Provider value={{closeSmallNavbar,openSmallNavbar,isSmallNavbarOpen,setIsSmallNavbarOpen,screenSize,setScreenSize}}> 


    {children}
  </NavContext.Provider>
  )
}

export const useNavContext = ()=>{
  return useContext(NavContext)
}

export  {NavContext,NavProvider}