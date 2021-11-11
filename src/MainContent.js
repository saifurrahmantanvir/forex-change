import { Route } from 'react-router-dom';

import Home from './Components/Home'
import Settings from './Components/Settings'
import Requests from './Components/Requests'
import Uploads from './Components/Uploads'
import Bookmarks from './Components/Bookmarks'

import { BookmarksContextProvider } from './Components/BookmarksContext';

const MainContent = function () {
   return (
      <BookmarksContextProvider>
         <div className='main-content'>
            <Route path="/" exact
               component={() => <Home />} />

            <Route path="/requests"
               component={() => <Requests />} />

            <Route path="/bookmarks"
               component={() => <Bookmarks />} />

            <Route path="/upload"
               component={() => <Uploads />} />

            <Route path="/settings"
               component={() => <Settings />} />
         </div>
      </BookmarksContextProvider>
   );
}

export default MainContent;