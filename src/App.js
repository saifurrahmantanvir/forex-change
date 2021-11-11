import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.scss';

import Navbar from './Navbar';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import LoginForm from './Components/LoginForm';

import { ThemeContextProvider } from './Components/ThemeContext';
import { UserContextProvider } from './Components/UserContext';

const AppWithUser = function () {
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
                     <ThemeContextProvider>
                        <Navbar />
                        <Sidebar location={location} history={history} />
                        <MainContent />
                     </ThemeContextProvider>
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
      <UserContextProvider>
         <AppWithUser />
      </UserContextProvider>
   )
}

export default App;