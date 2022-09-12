import React from "react";
import '../sass/exchangeModal.scss'

import { IconClose } from "../icons/Icons";
import { useUploadedProducts } from "../contexts/UploadedProductsContext";
import ExchangeCard from "./ExchangeCard";
import Pagination from "./Pagination";
import { usePaginationHook } from "./usePaginationHook";

const Backdrop = ({ children, toggleModal }) => {
   return (
      <div className='e-backdrop' onClick={toggleModal}>
         {children}
      </div>
   )
}

const ExchangeModal = function ({ toggleModal, togglePopup }) {
   const [uploadedProducts] = useUploadedProducts();
   const { page, setPage, totalPages, itemsToShow } = usePaginationHook(uploadedProducts);

   return (
      <Backdrop toggleModal={toggleModal}>
         <div className="e-modal" onClick={(e) => e.stopPropagation()}>
            <button className='e-modal__close-button' onClick={toggleModal}>
               <IconClose />
            </button>
            {
               uploadedProducts.length
                  ? <h2 className='e-modal__heading'>Exchange with</h2>
                  : <h2 className='e-modal__heading'>You don't have any products<br />uploaded to exchange</h2>
            }
            <div className='e-modal__products'>
               {
                  itemsToShow.length ?
                     itemsToShow.map((p) => (
                        <ExchangeCard
                           key={p.productId}
                           product={p}
                           toggleModal={toggleModal}
                           togglePopup={togglePopup}
                        />
                     )) : null
               }
            </div>
            {
               uploadedProducts.length ? (
                  <Pagination
                     goToPrevItems={() => setPage(p => p - 1)}
                     goToNextItems={() => setPage(p => p + 1)}
                     totalPages={totalPages} page={page}
                  />
               ) : null
            }
         </div>
      </Backdrop>
   )
}

export default ExchangeModal