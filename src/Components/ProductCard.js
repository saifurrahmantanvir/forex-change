import React from 'react'
import '../sass/productCard.scss'

import { useBookmarksContext } from './BookmarksContext';
import { ProductIconBookmark, ProductIconBookmarkFill, ProductIconDelete } from '../icons/Icons';
import { useTheme } from './ThemeContext';

import productImg from '../img/product.png';

const ProductCard = function ({ product, markable = true, deleteUpload = null }) {
   const [theme] = useTheme();
   const [marked, setMarked] = React.useState(product.marked);
   const [, setMarkedItems] = useBookmarksContext();

   const addToBookmark = () => {
      setMarkedItems({ type: 'ADD', product, marked: true });
      setMarked(true);
   }

   const handleRemove = () => {
      setMarkedItems({ type: 'REMOVE', product, marked: false });
      setMarked(false);
   }

   return (
      <div className="product">
         <figure className="product__item">
            <img src={product.productImage || productImg} alt='product 1' className='product__img' />
         </figure>
         {
            markable ? (
               <button className="product__bookmark" onClick={marked ? handleRemove : addToBookmark}>
                  {
                     marked ? <ProductIconBookmarkFill fill={theme} />
                        : <ProductIconBookmark fill={theme} />
                  }
               </button>
            ) : (
               <button className="product__delete" onClick={() => deleteUpload(product.productId)}>
                  <ProductIconDelete fill={theme} />
               </button>
            )
         }
         <h3 className="product__name" style={{ color: theme }}>
            {`${product.productName}`.slice(0, 11).trim().padEnd(14, '...')}
         </h3>
         <span className="product__used">Used - {product.used}</span>

         <button className="product__request" style={{ backgroundColor: theme }}>
            Request Exchange
         </button>
      </div>
   )
}

export default ProductCard