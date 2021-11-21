import { Route, Switch } from 'react-router-dom';

import Home from './Components/Pages/Home'
import Exchanges from './Components/Pages/Exchanges'
import Settings from './Components/Pages/Settings'
import Uploads from './Components/Pages/Uploads'
import Bookmarks from './Components/Pages/Bookmarks'

import { BookmarksContextProvider } from './Components/Contexts/BookmarksContext';
import { ExchangeContextProvider } from './Components/Contexts/ExchangeContext';
import { UploadedProductsContextProvider } from './Components/Contexts/UploadedProductsContext';
import { ExchangeLogContextProvider } from './Components/Contexts/ExchangeLogContext';

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