import React from 'react'
import { useHistory } from 'react-router-dom';
import '../sass/settings.scss'

import { useTheme } from '../contexts/ThemeContext'
import ThemeToggler from '../Components/ThemeToggler';

const Settings = function ({ setIsLoggedIn }) {
   const [theme] = useTheme();
   const history = useHistory();

   /* const handleChange = (e) => setTheme(e.target.value); */

   const handleLogout = () => {
      history.push('/');
      setIsLoggedIn('notLoggedIn');
   }

   return (
      <div className="settings">
         <h2 className='title'>User preference</h2>
         <ThemeToggler settings />
         {/* <select className='settings__theme'
            value={theme}
            onChange={handleChange}
            onBlur={handleChange}
         >
            <option value="" disabled>Select a theme</option>
            <option value="#3f51b5">Purple</option>
            <option value="#eb3f54">Red</option>
            <option value="#ef233c">Red</option>
            <option value="#eb8057">Orange</option>
            <option value="#eb5e28">Orange</option>
         </select> */}
         <button onClick={handleLogout} style={{ backgroundColor: theme }} className="settings__logout"
         >
            Logout
         </button>
         <div className='settings__about'>
            <h3>About forexChange</h3>
            <p>forexChange is a fictional app for exchanging products with others. Using this app you can upload a product and then you can exchange that product with a product from another user.</p>
         </div>

         <p className="copyright settings__copy">&copy; Copyright forexChange 2021 by <a href='https://www.linkedin.com/in/saifurrahmantanvir' target={"_blank"} className='copyright__link' rel="noreferrer">Tanvir rahman.</a></p>
      </div>
   )
}

/* #f07167 Lightorange #e63946 Lightred
#EE005F Pink        #eb5e28 orange */

export default Settings