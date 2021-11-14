import React from "react";
import { useUserContext } from "./UserContext";

const UploadedProductsContext = React.createContext();

export const UploadedProductsContextProvider = function ({ children }) {
   const [user] = useUserContext();

   const [uploadedProducts, setUploadedProducts] = React.useState(() => {
      return JSON.parse(window.localStorage.getItem('products')) || user.uploads;
   });

   if (uploadedProducts?.length) {
      window.localStorage.setItem('products', JSON.stringify(uploadedProducts));
   }

   return (
      <UploadedProductsContext.Provider value={[uploadedProducts, setUploadedProducts]}>
         {children}
      </UploadedProductsContext.Provider>
   )
}

export const useUploadedProducts = function () {
   const context = React.useContext(UploadedProductsContext);
   if (!context) {
      throw new Error('useUploadedProducts should be used inside the UploadedProductsContextProvider')
   }
   return context;
}