import React from 'react'
import { useTheme } from './ThemeContext'

const Settings = function () {
   const [theme, setTheme] = useTheme();

   const handleChange = (e) => setTheme(e.target.value);

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
      </div>
   )
}

// #f07167 Lightorange
// #e63946 Lightred
// #EE005F Pink
// #eb5e28 orange

export default Settings