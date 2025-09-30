import React, { createContext } from 'react'
import { doctors } from '../assets/assets'

export const AppContext = createContext();
const AppContextProvider = (props) => {
    const value = {
       doctors
    }
  return (
    <div>
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
      
    </div>
  )
}

export default AppContextProvider
