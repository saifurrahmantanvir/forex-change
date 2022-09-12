import React from 'react'
import '../sass/uploads.scss'

import UploadModal from '../Components/UploadModal';
import ProductCard from '../Components/ProductCard';

import { useTheme } from '../contexts/ThemeContext'
import { useUserContext } from '../contexts/UserContext';
import { useUploadedProducts } from '../contexts/UploadedProductsContext'

import UploadSvg from '../icons/UploadSvg'
import { IconUpload } from '../icons/Icons';

const Uploads = function () {
   const [user] = useUserContext();
   const [theme] = useTheme();
   const [openModal, setOpenModal] = React.useState(false);
   const [uploadedProducts, setUploadedProducts] = useUploadedProducts();

   const deleteUpload = (id) => {
      const remainingProducts = uploadedProducts.filter(p => p.productId !== id);
      window.localStorage.removeItem('uploads');
      setUploadedProducts(remainingProducts);
   }

   const toggleModal = () => setOpenModal(!openModal);

   return (
      <React.Fragment>
         <div className='upload'>
            {
               uploadedProducts?.length
                  ? uploadedProducts.map(p => (
                     <ProductCard key={p.productId} product={p}
                        markable={false}
                        deleteUpload={deleteUpload}
                     />
                  )) : (
                     <div className='upload__recommendation'>
                        <UploadSvg />
                        <h2>No product uploaded</h2>
                        <p className='upload__description'>
                           Upload a product and get it exchanged or exchange with others
                        </p>
                     </div>
                  )
            }
         </div>
         <div className='upload__product'>
            <button
               className='upload__button'
               style={{ backgroundColor: theme }}
               onClick={toggleModal}
            >
               Upload
               <IconUpload />
            </button>
            {
               openModal ? <UploadModal toggleModal={toggleModal} user={user}
                  setUploadedProducts={setUploadedProducts}
                  uploadedProducts={uploadedProducts} />
                  : null
            }
         </div>
      </React.Fragment>
   )
}

export default Uploads