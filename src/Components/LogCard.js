import React from 'react'
import '../sass/logCard.scss'

import { useTheme } from '../contexts/ThemeContext';

const LogCard = function ({ product }) {
   const [theme] = useTheme();

   const productNameFormatter = (productName) => {
      const nameLength = productName.length;
      if (nameLength <= 20) {
         return productName;
      } else {
         return productName.slice(0, 17).trim().padEnd(20, '...');
      }
   }

   return (
      <div className="log-card">
         <figure className="log-card__item">
            <img src={product.productImage} alt='' className='log-card__img' />
         </figure>

         <div className='log-card__description'>
            <h4 className="log-card__name" style={{ color: theme }}>
               {productNameFormatter(product.productName)}
            </h4>
            <span className="log-card__used">Used - {product.used}</span>
         </div>
      </div>
   )
}

export default LogCard