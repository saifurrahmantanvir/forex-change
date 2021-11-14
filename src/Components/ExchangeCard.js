import React from 'react'
import '../sass/exchangeCard.scss'

import { useTheme } from './Contexts/ThemeContext';
import exchangeIcon from '../icons/exchange.png'
import { useExchangeContext } from './Contexts/ExchangeContext';
import { useUploadedProducts } from './Contexts/UploadedProductsContext';
import { useProducts } from './Contexts/ProductsContext';
import { useBookmarksContext } from './Contexts/BookmarksContext';

const ExchangeCard = function ({ product, toggleModal, togglePopup }) {
   const [theme] = useTheme();
   const [exchangeIDs, setExchangeIDs] = useExchangeContext();
   const [uploadedProducts, setUploadedProducts] = useUploadedProducts();
   const [products, setProducts] = useProducts();
   const [, setMarkedProducts] = useBookmarksContext();

   const handleExchange = () => {
      setExchangeIDs(pState => ({ ...pState, givenProductId: product.productId }));

      const remainingUploads = uploadedProducts.filter(p => p.productId !== product.productId);
      window.localStorage.removeItem('products');
      setUploadedProducts(remainingUploads);

      const takenProduct = products.find(p => p.productId === exchangeIDs.takenProductId);
      if (window.localStorage.getItem(`${takenProduct.productId}`)) {
         setMarkedProducts({ type: 'REMOVE', product: takenProduct, marked: false });
      }

      const remainingProducts = products.filter(p => p.productId !== exchangeIDs.takenProductId);
      setProducts(remainingProducts);

      toggleModal();
      togglePopup();
   }

   return (
      <div className="e-card">
         <img src={product.productImage} alt='product 1' className='e-card__img' />

         <h3 className="e-card__name" style={{ color: theme }}>
            {product.productName}
         </h3>
         <span className="e-card__used">Used - {product.used}</span>

         <button
            className="e-card__exchange"
            onClick={handleExchange}
         >
            <img src={exchangeIcon} alt='' className='e-card__icon' />
         </button>
      </div>
   )
}

export default ExchangeCard