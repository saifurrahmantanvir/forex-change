import React from 'react'
import { useHistory } from 'react-router-dom';
import { useTheme } from '../Contexts/ThemeContext'

const Settings = function ({ setIsLoggedIn }) {
   const [theme, setTheme] = useTheme();
   const history = useHistory();

   const handleChange = (e) => setTheme(e.target.value);

   const handleLogout = () => {
      history.push('/');
      setIsLoggedIn('notLoggedIn');
   }

   return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
         <h4 style={{ display: 'inline-block' }}>Select a Theme-&nbsp;</h4>
         <select
            style={{ fontFamily: 'inherit', padding: '5px' }}
            value={theme}
            onChange={handleChange}
            onBlur={handleChange}
         >
            <option value="#276738">Green</option>
            <option value="#ef233c">Red</option>
            <option value="#eb5e28">Orange</option>
         </select>
         <div>
            <button
               onClick={handleLogout}
               style={{ backgroundColor: theme, marginTop: '20px' }}
            >
               Logout
            </button>
         </div>
         <h3 style={{ margin: '30px 0 5px' }}>About forexChange</h3>
         <p style={{ width: '50%', margin: '0 auto' }}>
            forexChange is a fictional app for exchanging products with others.
            Using this app you can upload a product and then
            you can exchange that product with a product from another user.
         </p>
      </div>
   )
}

// #f07167 Lightorange // #e63946 Lightred
// #EE005F Pink        // #eb5e28 orange

export default Settings