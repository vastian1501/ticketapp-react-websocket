import { createContext, useState } from 'react'

export const UiContext = createContext()

export const UiProvider = ({ children }) => {

  const [ menu, setMenu ] = useState(false)

  const showMenu = () => setMenu(true)
  const hideMenu = () => setMenu(false)

  return(
    <UiContext.Provider value={{ 
      menu,
      setMenu,
      showMenu,
      hideMenu
     }}>
      { children }
    </UiContext.Provider>
  )
}