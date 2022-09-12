import React from 'react'
import '../sass/exchangeCard.scss'

import { useTheme } from '../contexts/ThemeContext';
import exchangeIcon from '../icons/exchange.png'
import { useExchangeContext } from '../contexts/ExchangeContext';
import { useUploadedProducts } from '../contexts/UploadedProductsContext';
import { useProducts } from '../contexts/ProductsContext';
import { useBookmarksContext } from '../contexts/BookmarksContext';
import { useExchangeLog } from '../contexts/ExchangeLogContext';

const ExchangeCard = function ({ product, toggleModal, togglePopup }) {
   const [theme] = useTheme();
   const [exchangeIDs, setExchangeIDs] = useExchangeContext();
   const [, setExchangeHistory] = useExchangeLog();
   const [uploadedProducts, setUploadedProducts] = useUploadedProducts();
   const [products, setProducts] = useProducts();
   const [, setMarkedProducts] = useBookmarksContext();

   const handleExchange = () => {
      setExchangeIDs(pState => ({ ...pState, givenProductId: product.productId }));

      const remainingUploads = uploadedProducts.filter(p => p.productId !== product.productId);
      window.localStorage.removeItem('uploads');
      setUploadedProducts(remainingUploads);

      const takenProduct = products.find(p => p.productId === exchangeIDs.takenProductId);

      window.localStorage.setItem(`exchanged-${takenProduct.productId}`, JSON.stringify(takenProduct));
      setExchangeHistory(prevProducts => [...prevProducts, takenProduct]);

      if (window.localStorage.getItem(`marked-${takenProduct.productId}`)) {
         setMarkedProducts({ type: 'REMOVE', product: takenProduct, marked: false });
      }

      const remainingProducts = products.filter(p => p.productId !== exchangeIDs.takenProductId);
      setProducts(remainingProducts);

      toggleModal();
      togglePopup();
   }

   return (
      <div className="exchange-card">
         <img src={product.productImage} alt='' className='exchange-card__img' />

         <h3 className="exchange-card__name" style={{ color: theme }}>
            {product.productName}
         </h3>
         <span className="exchange-card__used">Used - {product.used}</span>

         <button
            className="exchange-card__exchange"
            onClick={handleExchange}
         >
            <img src={exchangeIcon} alt='' className='exchange-card__icon' />
         </button>
      </div>
   )
}

export default ExchangeCard