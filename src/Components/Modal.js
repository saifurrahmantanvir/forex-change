import React from 'react'
import '../sass/modal.scss'

import { IconClose, IconUpload } from '../icons/Icons'
import ModalSvg from '../icons/ModalSvg'

import { useTheme } from './ThemeContext'

import iphoneImg from '../img/iphone-12.png'

import { users } from '../userData'

const Backdrop = ({ children, toggleModal }) => {
   return (
      <div className='backdrop' onClick={toggleModal}>
         {children}
      </div>
   )
}

const Modal = function ({ toggleModal, user, uploadedProducts, setUploadedProducts }) {
   const [theme] = useTheme();

   const userIndex = users.findIndex(u => u.id === user.id);

   const handleSubmit = (e) => {
      e.preventDefault();
      const { productName, productUsed } = e.target.elements;

      const prevUploads = uploadedProducts?.map((p, i) => (
         { ...p, productId: (userIndex + 1) * 1000 + (i + 1) }
      ))

      const product = {
         productId: (userIndex + 1) * 1000 + (prevUploads.length + 1),
         productName: productName.value,
         used: productUsed.value,
         productImage: iphoneImg,
         marked: false
      }
      setUploadedProducts([...prevUploads, product]);
      toggleModal();
   }

   return (
      <Backdrop toggleModal={toggleModal}>
         <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className='modal__close-button' onClick={toggleModal}>
               <IconClose />
            </button>
            <h2 className='modal__heading'>Upload a product</h2>

            <form className='modal__form' onSubmit={handleSubmit}>
               <div className='modal__product-name'>
                  <label htmlFor='productName' className='modal__label'>Product name</label>
                  <input id='productName' className='modal__input'
                     placeholder='Macbook Pro M1'
                     value='iPhone 12 mini'
                     readOnly
                     required
                  />
               </div>
               <div className='modal__product-used'>
                  <label htmlFor='productUsed' className='modal__label'>Product used (In months)</label>
                  <input id='productUsed' className='modal__input'
                     placeholder='10 months'
                     value='5 months'
                     readOnly
                     required
                  />
               </div>
               <div className='modal__product-image'>
                  <label htmlFor='productImage' className='modal__label'>Product Image</label>
                  <input id='productImage' className='modal__input'
                     value='this field has a preset value'
                     readOnly
                     placeholder='paste Url or leave it empty'
                  />
               </div>
               <div className='modal__upload'>
                  <button className='modal__upload-button' style={{ backgroundColor: theme }}>
                     <span>Upload</span>
                     <IconUpload />
                  </button>
               </div>
            </form>

            <ModalSvg />
         </div>
      </Backdrop>
   )
}

export default Modal
