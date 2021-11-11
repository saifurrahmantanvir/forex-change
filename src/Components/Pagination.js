import React from 'react'
import { useTheme } from './ThemeContext'

const Pagination = function ({ goToPrevItems, goToNextItems, totalPages, page }) {
   const [theme] = useTheme();

   if (page === 1) {
      return (
         <div className='pagination'>
            <button className='pagination__right'
               style={{ backgroundColor: theme }}
               onClick={goToNextItems}
            >
               page {page + 1} &rarr;
            </button>
         </div>
      )
   }

   if (page === totalPages) {
      return (
         <div className='pagination'>
            <button className='pagination__left'
               style={{ backgroundColor: theme }}
               onClick={goToPrevItems}
            >
               &larr; page {page - 1}
            </button>
         </div>
      )
   }

   return (
      <div className='pagination'>
         <button className='pagination__left'
            style={{ backgroundColor: theme }}
            onClick={goToPrevItems}
         >
            &larr; page {page - 1}
         </button>

         <button className='pagination__right'
            style={{ backgroundColor: theme }}
            onClick={goToNextItems}
         >
            page {page + 1} &rarr;
         </button>
      </div>
   )
}

export default Pagination