import React from 'react'
import '../sass/uploadModal.scss'

import { IconClose, IconUpload } from '../icons/Icons'
import UploadModalSvg from '../icons/UploadModalSvg'

import { useTheme } from './Contexts/ThemeContext'

import iphoneImg from '../img/upload.png'

import { users } from '../userData'

const Backdrop = ({ children, toggleModal }) => {
   return (
      <div className='u-backdrop' onClick={toggleModal}>
         {children}
      </div>
   )
}

const UploadModal = function ({ toggleModal, user, uploadedProducts, setUploadedProducts }) {
   const [theme] = useTheme();

   const userIndex = users.findIndex(u => u.id === user.id);

   const handleSubmit = (e) => {
      e.preventDefault();
      const { productName, productUsed } = e.target.elements;

      const prevUploads = uploadedProducts?.map((p, i) => (
         { ...p, productId: (userIndex + 1) * 1000 + (i + 1) }
      ))
      const prevUploadsLength = prevUploads?.length || 0;

      const product = {
         productId: (userIndex + 1) * 1000 + (prevUploadsLength + 1),
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
         <div className="u-modal" onClick={(e) => e.stopPropagation()}>
            <button className='u-modal__close-button' onClick={toggleModal}>
               <IconClose />
            </button>
            <h2 className='u-modal__heading'>Upload a product</h2>

            <form className='u-modal__form' onSubmit={handleSubmit}>
               <div className='u-modal__product-name'>
                  <label htmlFor='productName' className='u-modal__label'>Product name</label>
                  <input id='productName' className='u-modal__input'
                     placeholder='Macbook Pro M1'
                     value='iPhone 12 mini'
                     readOnly
                     required
                  />
               </div>
               <div className='u-modal__product-used'>
                  <label htmlFor='productUsed' className='u-modal__label'>Product used (In months)</label>
                  <input id='productUsed' className='u-modal__input'
                     placeholder='10 months'
                     value='5 months'
                     readOnly
                     required
                  />
               </div>
               <div className='u-modal__product-image'>
                  <label htmlFor='productImage' className='u-modal__label'>Product Image</label>
                  <input id='productImage' className='u-modal__input'
                     value='this field has a preset value'
                     readOnly
                     placeholder='paste Url or leave it empty'
                  />
               </div>
               <div className='u-modal__upload'>
                  <button className='u-modal__upload-button' style={{ backgroundColor: theme }}>
                     <span>Upload</span>
                     <IconUpload />
                  </button>
               </div>
            </form>

            <UploadModalSvg />
         </div>
      </Backdrop>
   )
}

export default UploadModal
