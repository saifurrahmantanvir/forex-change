import React from 'react'

const ProductsContext = React.createContext();

const ProductsContextProvider = function ({ children }) {
   const [products, setProducts] = React.useState([]);
   const value = [products, setProducts];

   return (
      <ProductsContext.Provider value={value}>
         {children}
      </ProductsContext.Provider>
   )
}

const useProducts = function () {
   const context = React.useContext(ProductsContext);
   if (!context) {
      throw new Error('useProducts should be used inside the ProductsContextProvider');
   }
   return context;
}

export { ProductsContextProvider, useProducts }