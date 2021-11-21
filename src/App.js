import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.scss';

import Navbar from './Navbar';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import LoginForm from './Components/LoginForm';

import { ThemeContextProvider } from './Components/Contexts/ThemeContext';
import { UserContextProvider } from './Components/Contexts/UserContext';
import { ProductsContextProvider } from './Components/Contexts/ProductsContext';

const AppWithContexts = function () {
   const [isLoggedIn, setIsLoggedIn] = React.useState('notLoggedIn');

   if (isLoggedIn !== 'loggedIn') {
      return (
         <LoginForm
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
         />
      )
   }

   if (isLoggedIn === 'loggedIn') {
      return (
         <div className='app'>
            <Router>
               <Route render={(location, history) => (
                  <React.Fragment>
                     <Navbar />
                     <Sidebar location={location} history={history} />
                     <MainContent setIsLoggedIn={setIsLoggedIn} />
                  </React.Fragment>
               )}
               />
            </Router>
         </div>
      )
   }
}

const App = function () {
   return (
      <ThemeContextProvider>
         <UserContextProvider>

            <ProductsContextProvider>
               <AppWithContexts />
            </ProductsContextProvider>

         </UserContextProvider>
      </ThemeContextProvider>
   )
}

export default App;