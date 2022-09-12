import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Exchanges from './pages/Exchanges'
import Settings from './pages/Settings'
import Uploads from './pages/Uploads'
import Bookmarks from './pages/Bookmarks'

import { BookmarksContextProvider } from './contexts/BookmarksContext';
import { ExchangeContextProvider } from './contexts/ExchangeContext';
import { UploadedProductsContextProvider } from './contexts/UploadedProductsContext';
import { ExchangeLogContextProvider } from './contexts/ExchangeLogContext';

const MainContent = function ({ setIsLoggedIn }) {
   return (
      <BookmarksContextProvider>
         <ExchangeContextProvider>
            <ExchangeLogContextProvider>
               <UploadedProductsContextProvider>
                  <div className='main-content'>
                     <Switch>
                        <Route path="/" exact component={() => <Home />} />
                        <Route path="/exchanges" exact component={() => <Exchanges />} />
                        <Route path="/bookmarks" component={() => <Bookmarks />} />
                        <Route path="/upload" component={() => <Uploads />} />
                        <Route path="/settings" component={() => <Settings setIsLoggedIn={setIsLoggedIn} />} />
                     </Switch>
                  </div>
               </UploadedProductsContextProvider>
            </ExchangeLogContextProvider>
         </ExchangeContextProvider>
      </BookmarksContextProvider>
   );
}

export default MainContent;