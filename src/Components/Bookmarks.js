import React from 'react'
import '../sass/bookmarks.scss'

import ProductCard from './ProductCard'
import { useBookmarksContext } from './BookmarksContext'
import BookmarkSvg from '../icons/BookmarkSvg'

const Bookmarks = function () {
   const [markedItems] = useBookmarksContext();

   return (
      <div className='bookmarks'>
         {
            markedItems.length
               ? markedItems.map((p) => (
                  <ProductCard key={p.productId} product={p} />
               ))
               : (
                  <div className='bookmarks__recommendation'>
                     <BookmarkSvg />
                     <h2>No Bookmarks Yet. Bookmark Something For Later</h2>
                  </div>
               )
         }
      </div>
   )
}

export default Bookmarks