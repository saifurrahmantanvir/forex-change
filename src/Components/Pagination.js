import React from 'react'
import '../sass/pagination.scss'

import { useTheme } from '../contexts/ThemeContext'

const Pagination = function ({ goToPrevItems, goToNextItems, totalPages, page }) {
   const [theme] = useTheme();

   if (page === 1 && totalPages !== 1) {
      return (
         <div className='pagination'>
            <button className='pagination__button'
               style={{ backgroundColor: theme }}
               onClick={goToNextItems}
            >
               page {page + 1} &rarr;
            </button>
         </div>
      )
   }

   if (totalPages === 1) {
      return null
   }

   if (page === totalPages) {
      return (
         <div className='pagination'>
            <button className='pagination__button'
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
         <button className='pagination__button'
            style={{ backgroundColor: theme }}
            onClick={goToPrevItems}
         >
            &larr; page {page - 1}
         </button>

         <button className='pagination__button'
            style={{ backgroundColor: theme }}
            onClick={goToNextItems}
         >
            page {page + 1} &rarr;
         </button>
      </div>
   )
}

export default Pagination