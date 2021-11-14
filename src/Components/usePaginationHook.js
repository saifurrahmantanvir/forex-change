import React from 'react'

const usePaginationHook = function (products) {
   const [page, setPage] = React.useState(1);
   const itemsPerPage = 3;

   const startIndex = (page - 1) * itemsPerPage;
   const endIndex = page * itemsPerPage;

   const totalPages = Math.ceil(products.length / itemsPerPage);
   const itemsToShow = [...products].slice(startIndex, endIndex);

   return { page, setPage, totalPages, itemsToShow }
}

export { usePaginationHook }