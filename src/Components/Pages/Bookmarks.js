import React from 'react'
import '../../sass/bookmarks.scss'

import ProductCard from '../ProductCard'

import { useBookmarksContext } from '../Contexts/BookmarksContext'
import { useExchangeContext } from '../Contexts/ExchangeContext'

import BookmarkSvg from '../../icons/BookmarkSvg'
import ExchangeModalWrapper from '../ExchangeModalWrapper'

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
                     <div className='bookmarks__recommendation'>
                        <BookmarkSvg />
                        <h2>No Bookmarks Yet. Bookmark Something For Later</h2>
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