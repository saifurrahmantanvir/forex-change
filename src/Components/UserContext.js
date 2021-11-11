import React from 'react';

const UserContext = React.createContext();

const UserContextProvider = function ({ children }) {
   const [user, setUser] = React.useState({});

   return (
      <UserContext.Provider value={[user, setUser]}>
         {children}
      </UserContext.Provider>
   )
}

const useUserContext = function () {
   const context = React.useContext(UserContext);
   if (!context) {
      throw new Error('useUserContext should be used inside the UserContextProvider')
   }
   return context;
}

export { UserContextProvider, useUserContext }