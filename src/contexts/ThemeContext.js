import React from 'react'

const ThemeContext = React.createContext();

export const ThemeContextProvider = function ({ children }) {
   /* const [theme, setTheme] = React.useState('#3f51b5'); */
   const [theme, setTheme] = React.useState('#83776d');

   return (
      <ThemeContext.Provider value={[theme, setTheme]}>
         {children}
      </ThemeContext.Provider>
   )
}

export const useTheme = function () {
   const context = React.useContext(ThemeContext);
   if (!context) {
      throw new Error('useTheme should be used inside the ThemeContextProvider')
   }
   return context;
}