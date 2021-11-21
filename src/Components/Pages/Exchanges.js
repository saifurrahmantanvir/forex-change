import React from 'react'
import '../../sass/exchanges.scss'

import LogCard from '../LogCard'
import ExchangeSvg from '../../icons/ExchangeSvg';

import { useExchangeLog } from '../Contexts/ExchangeLogContext'
import { useTheme } from '../Contexts/ThemeContext';

const Exchanges = function () {
   const [exchangeHistory, setExchangeHistory] = useExchangeLog();
   const [theme] = useTheme();

   const handleHistory = () => {
      exchangeHistory.map(p =>
         window.localStorage.removeItem(`exchanged-${p.productId}`)
      );

      setExchangeHistory([]);
   }

   return (
      <React.Fragment>
         <div className='exchange'>
            {
               exchangeHistory.length ?
                  exchangeHistory.map(p => (
                     <LogCard key={p.productId} product={p} />
                  )) : (
                     <div className='exchange__fallback'>
                        <ExchangeSvg />
                        <h2>No exchanges yet. Your exchanged products will be visible here</h2>
                     </div>
                  )
            }
         </div>
         {
            exchangeHistory.length
               ? (
                  <div className='exchange__resetter'>
                     <button
                        className='exchange__clear-button'
                        onClick={handleHistory}
                        style={{ backgroundColor: theme }}
                     >
                        Clear History
                     </button>
                  </div>
               ) : null
         }
      </React.Fragment>
   )
}

export default Exchanges