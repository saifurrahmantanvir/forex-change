import React from 'react'
import '../sass/popup.scss'

import ExchangeModal from './ExchangeModal';
import { IconClose } from '../icons/Icons';

const ExchangeModalWrapper = function ({ openModal, openPopup, toggleModal, togglePopup }) {
   return (
      <React.Fragment>
         {
            openModal ? (
               <ExchangeModal
                  toggleModal={toggleModal}
                  togglePopup={togglePopup}
               />
            ) : null
         }
         {
            openPopup ? (
               <div className='popup'>
                  <div className='popup__text'>
                     <h3>Your product exchange was successful</h3>
                  </div>
                  <button className='popup__close-button' onClick={togglePopup}>
                     <IconClose />
                  </button>
               </div>
            ) : null
         }
      </React.Fragment>
   )
}

export default ExchangeModalWrapper