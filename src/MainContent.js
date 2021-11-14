import { Route } from 'react-router-dom';

import Home from './Components/Pages/Home'
import Settings from './Components/Pages/Settings'
import Requests from './Components/Pages/Requests'
import Uploads from './Components/Pages/Uploads'
import Bookmarks from './Components/Pages/Bookmarks'

import { BookmarksContextProvider } from './Components/Contexts/BookmarksContext';
import { ExchangeContextProvider } from './Components/Contexts/ExchangeContext';
import { UploadedProductsContextProvider } from './Components/Contexts/UploadedProductsContext';

const MainContent = function () {
   return (
      <BookmarksContextProvider>
         <ExchangeContextProvider>
            <UploadedProductsContextProvider>
               <div className='main-content'>
                  <Route path="/" exact component={() => <Home />} />
                  <Route path="/requests" component={() => <Requests />} />
                  <Route path="/bookmarks" component={() => <Bookmarks />} />
                  <Route path="/upload" component={() => <Uploads />} />
                  <Route path="/settings" component={() => <Settings />} />
               </div>
            </UploadedProductsContextProvider>
         </ExchangeContextProvider>
      </BookmarksContextProvider>
   );
}

export default MainContent;