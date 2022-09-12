import React from 'react'
import '../sass/bookmarks.scss'

import ProductCard from '../Components/ProductCard'

import { useBookmarksContext } from '../contexts/BookmarksContext'
import { useExchangeContext } from '../contexts/ExchangeContext'

import BookmarkSvg from '../icons/BookmarkSvg'
import ExchangeModalWrapper from '../Components/ExchangeModalWrapper'

const Bookmarks = function () {
   const [markedItems] = useBookmarksContext();
   const [, setExchangeIDs] = useExchangeContext();

   const [openModal, setOpenModal] = React.useState(false);
   const [openPopup, setOpenPopup] = React.useState(false);

   const toggleModal = () => setOpenModal(!openModal);
   const togglePopup = () => setOpenPopup(!openPopup);

   return (
      <React.Fragment>
         <div className='bookmarks'>
            {
               markedItems.length
                  ? markedItems.map((p) => (
                     <ProductCard
                        key={p.productId}
                        product={p}
                        toggleModal={toggleModal}
                        setExchangeIDs={setExchangeIDs}
                     />
                  )) : (
                     <div className='bookmarks__fallback'>
                        <BookmarkSvg />
                        <h2>No bookmarks yet. Bookmark something for later</h2>
                     </div>
                  )
            }
         </div>
         <ExchangeModalWrapper
            openModal={openModal} openPopup={openPopup}
            toggleModal={toggleModal} togglePopup={togglePopup}
         />
      </React.Fragment>
   )
}

export default Bookmarks