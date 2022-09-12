import React from 'react'
import { useProducts } from './ProductsContext';

const ExchangeLogContext = React.createContext();

export const ExchangeLogContextProvider = function ({ children }) {
   const [products] = useProducts();

   const [exchangeHistory, setExchangeHistory] = React.useState(() => {
      return products.map((p) =>
         JSON.parse(window.localStorage.getItem(`exchanged-${p.productId}`))
      ).filter((p) => p !== null) || [];

   });

   return (
      <ExchangeLogContext.Provider value={[exchangeHistory, setExchangeHistory]}>
         {children}
      </ExchangeLogContext.Provider>
   )
}

export const useExchangeLog = function () {
   const context = React.useContext(ExchangeLogContext);
   if (!context) {
      throw new Error('useExchangeLog should be used inside the ExchangeLogContextProvider')
   }
   return context;
}