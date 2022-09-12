import React from 'react'
import { useProducts } from './ProductsContext';

const BookmarksContext = React.createContext();

const reducer = function (products, action) {
   const cProduct = { ...action.product, marked: action.marked }

   switch (action.type) {
      case 'ADD':
         window.localStorage.setItem(`marked-${cProduct.productId}`, JSON.stringify(cProduct));
         return [...products, cProduct];

      case 'REMOVE':
         const remainingProducts = products.filter(
            (product) => product.productId !== cProduct.productId
         );
         window.localStorage.removeItem(`marked-${cProduct.productId}`);
         return [...remainingProducts];

      default:
         return products;
   }
}

export const BookmarksContextProvider = function ({ children }) {
   const [products] = useProducts();

   const initialItems = products.map((p) =>
      JSON.parse(window.localStorage.getItem(`marked-${p.productId}`))
   ).filter((p) => p !== null) || [];

   const [markedItems, setMarkedItems] = React.useReducer(reducer, initialItems);

   const value = [markedItems, setMarkedItems];

   return (
      <BookmarksContext.Provider value={value}>
         {children}
      </BookmarksContext.Provider>
   )
}

export const useBookmarksContext = function () {
   const context = React.useContext(BookmarksContext);
   if (!context) {
      throw new Error('useBookmarksContext should be used inside the BookmarksContextProvider');
   }
   return context;
}