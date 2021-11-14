import React from 'react'

const ExchangeContext = React.createContext();

export const ExchangeContextProvider = function ({ children }) {
   const [exchangeIDs, setExchangeIDs] = React.useState({
      takenProductId: null,
      givenProductId: null
   })

   return <ExchangeContext.Provider value={[exchangeIDs, setExchangeIDs]}>
      {children}
   </ExchangeContext.Provider>
}

export const useExchangeContext = function () {
   const context = React.useContext(ExchangeContext);
   if (!context) {
      throw new Error('useExchangeContext should be used inside the ExchangeContextProvider')
   }
   return context;
}