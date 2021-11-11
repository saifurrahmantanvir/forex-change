import React from 'react'
import '../sass/home.scss'

import ProductCard from './ProductCard'
import Pagination from './Pagination'

import { useUserContext } from './UserContext'

const Home = function () {
   const [user] = useUserContext();
   const [page, setPage] = React.useState(1);
   const itemsPerPage = 3;

   const startIndex = (page - 1) * itemsPerPage;
   const endIndex = page * itemsPerPage;

   const initialItems = user.products.map(p => {
      return JSON.parse(window.localStorage.getItem(`${p.productId}`)) ||
         { ...p, marked: false }
   });
   const totalPages = Math.ceil(initialItems.length / itemsPerPage);
   const itemsToShow = [...initialItems].slice(startIndex, endIndex);

   return (
      <React.Fragment>
         <div className="home">
            {
               itemsToShow.map((p) => (
                  <ProductCard key={p.productId} product={p} />
               ))
            }
         </div>
         <Pagination
            goToPrevItems={() => setPage(p => p - 1)}
            goToNextItems={() => setPage(p => p + 1)}
            totalPages={totalPages} page={page}
         />
      </React.Fragment>
   )
}

export default Home