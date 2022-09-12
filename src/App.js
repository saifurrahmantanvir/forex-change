import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './app.scss';

import Navbar from './Navbar';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import LoginForm from './Components/LoginForm';

import { ThemeContextProvider } from './contexts/ThemeContext';
import { UserContextProvider } from './contexts/UserContext';
import { ProductsContextProvider } from './contexts/ProductsContext';

const AppWithContexts = function () {
   const [isLoggedIn, setIsLoggedIn] = React.useState('notLoggedIn');
   const history = useHistory();

   if (isLoggedIn !== 'loggedIn') {
      history.push('/');

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
            <Route render={(location, history) => (
               <React.Fragment>
                  <Navbar />
                  <Sidebar location={location} history={history} />
                  <MainContent setIsLoggedIn={setIsLoggedIn} />
               </React.Fragment>
            )}
            />
         </div>
      )
   }
}

const App = function () {
   return (
      <ThemeContextProvider>
         <UserContextProvider>

            <ProductsContextProvider>
               <Router>
                  <AppWithContexts />
               </Router>
            </ProductsContextProvider>

         </UserContextProvider>
      </ThemeContextProvider>
   )
}

export default App;