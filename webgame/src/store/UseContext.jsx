import React, { useState } from "react";


export const UseContext = React.createContext({

})

const UseContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(null)


  const showNavbar = () => {
    setIsOpen(!isOpen)


    console.log('hiiii');
    document.getElementById("mySidenav").style.width = "200px";

  }



  const close = () => {
    setIsOpen(!isOpen)
    setIsOpen(false)
    document.getElementById("mySidenav").style.width = "0";
    console.log('biiii');
  }



  return (
    <UseContext.Provider value={{
      isOpen, showNavbar, setIsOpen, close,

    }}>
      {children}
    </UseContext.Provider>
  )

}


export default UseContextProvider
