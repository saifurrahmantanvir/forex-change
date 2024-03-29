import React from 'react'
import '../sass/productCard.scss'

import { ProductIconBookmark, ProductIconBookmarkFill } from '../icons/Icons';

import { useBookmarksContext } from '../contexts/BookmarksContext';
import { useTheme } from '../contexts/ThemeContext';

import productImg from '../img/img-5.jpeg';

const ProductCard = function ({ product, markable = true, deleteUpload = null, toggleModal = null, setExchangeIDs = null }) {
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


   const productNameFormatter = (productName) => {
      const nameLength = productName.length;
      if (nameLength <= 25) {
         return productName;
      } else {
         return productName.slice(0, 22).trim().padEnd(25, '...');
      }
   }


   return (
      <div className="product">
         <figure className="product__item">
            <img src={product.productImage || productImg} alt='' className='product__img' />
         </figure>
         {
            markable ? (
               <button className="product__bookmark" onClick={marked ? handleRemove : addToBookmark}>
                  {
                     marked ? <ProductIconBookmarkFill fill={theme} />
                        : <ProductIconBookmark fill={theme} />
                  }
               </button>
            ) : null
         }

         <div className='product__settings'>
            <div className='product__description'>
               <h4 className="product__name" style={{ color: theme }}>
                  {productNameFormatter(product.productName)}
               </h4>
               <span className="product__used">Used - {product.used}</span>
            </div>
            {
               markable ? (
                  <button
                     className="product__cta"
                     style={{ backgroundColor: theme }}
                     onClick={() => {
                        toggleModal();
                        setExchangeIDs(pState => ({ ...pState, takenProductId: product.productId }));
                     }}
                  >
                     Exchange
                  </button>
               ) : (
                  <button
                     className="product__cta"
                     style={{ backgroundColor: theme }}
                     onClick={() => deleteUpload(product.productId)}
                  >
                     Delete
                  </button>
               )
            }
         </div>
      </div>
   )
}

export default ProductCard