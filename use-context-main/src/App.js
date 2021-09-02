import React, { useState } from "react";
import FunctionContextComponent from './FunctionContextComponent';

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }
 
  const data = {
        id: 15006,
        name: 'Maksudur Rahman Maruf',
        dept: 'CSE',
        university: 'MBSTU' 
      };

 

  return (
    <>
      <ThemeContext.Provider value={{darkTheme: darkTheme, data: data}}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent/>
      </ThemeContext.Provider>
    </>
  )

}

