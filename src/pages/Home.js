import React from 'react'
import '../sass/home.scss'

import ProductCard from '../Components/ProductCard'
import Pagination from '../Components/Pagination'
import ExchangeModalWrapper from '../Components/ExchangeModalWrapper'

import { useProducts } from '../contexts/ProductsContext'
import { useExchangeContext } from '../contexts/ExchangeContext'
import { usePaginationHook } from '../Components/usePaginationHook'

const Home = function () {
   const [products] = useProducts();
   const [, setExchangeIDs] = useExchangeContext();

   const [openModal, setOpenModal] = React.useState(false);
   const [openPopup, setOpenPopup] = React.useState(false);

   const exchangeableProducts = products.filter(p =>
      p.productId !== JSON.parse(window.localStorage.getItem(`exchanged-${p.productId}`))?.productId
   );

   const initialProducts = exchangeableProducts.map(p => {
      return JSON.parse(window.localStorage.getItem(`marked-${p.productId}`)) ||
         { ...p, marked: false }
   });
   const { page, setPage, totalPages, itemsToShow } = usePaginationHook(initialProducts);

   const toggleModal = () => setOpenModal(!openModal);
   const togglePopup = () => setOpenPopup(!openPopup);

   return (
      <React.Fragment>
         <div className="home">
            {
               itemsToShow.map((p) => (
                  <ProductCard key={p.productId} product={p}
                     toggleModal={toggleModal} setExchangeIDs={setExchangeIDs}
                  />
               ))
            }
         </div>
         <Pagination
            goToPrevItems={() => setPage(p => p - 1)}
            goToNextItems={() => setPage(p => p + 1)}
            totalPages={totalPages} page={page}
         />
         <ExchangeModalWrapper
            openModal={openModal} openPopup={openPopup}
            toggleModal={toggleModal} togglePopup={togglePopup}
         />
      </React.Fragment>
   )
}

export default Home