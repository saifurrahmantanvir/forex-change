import React from 'react'
import './sass/navbar.scss';
import { Link } from 'react-router-dom';

import { IconBookmark, IconUpload, IconLogout, ArrowIconLogo } from './icons/Icons';
import { useTheme } from './Components/ThemeContext';

const Navbar = function () {
   const [theme] = useTheme();

   return (
      <div className='navbar'>
         <div className='logo'>
            <ArrowIconLogo fill={theme} />
            forex<span style={{ color: theme }}>Change</span>
         </div>

         <nav className='navbar__list'>
            <Link className='navbar__item' to='/bookmarks'>
               <span>Bookmarks</span>
               <span className="navbar__notification" style={{ backgroundColor: theme }}>5</span>
               <IconBookmark />
            </Link>

            <Link className='navbar__item' to='/upload'>
               <span>Uploads</span>
               <IconUpload />
            </Link>

            <Link className='navbar__item' to='/settings'>
               <span>Tanvir</span>
               <IconLogout />
            </Link>
         </nav>
      </div>
   );
}

export default Navbar;