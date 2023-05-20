import React, { useContext, useState } from 'react'
import { thingsLearnt } from '../pages/ThingsLearnt/data';


const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(thingsLearnt || '');



  return (
  <AppContext.Provider value={{searchTerm,setSearchTerm,searchResults,setSearchResults}}> 


    {children}
  </AppContext.Provider>
  )
}

export const useAppContext = ()=>{
  return useContext(AppContext)
}

export  {AppContext,AppProvider}