import React from 'react'
import './sass/navbar.scss';

import { Link } from 'react-router-dom';

import { IconBookmark, IconUpload, IconLogout, ArrowIconLogo } from './icons/Icons';
import { useTheme } from './contexts/ThemeContext';
import { useUserContext } from './contexts/UserContext';

const Navbar = function () {
   const [theme] = useTheme();
   const [user] = useUserContext();

   const userNameI = user.owner.split(' ')[0];
   const userNameF = userNameI.slice(0, 1).toUpperCase() + userNameI.slice(1).toLowerCase();

   return (
      <div className='navbar'>
         <div className='navbar__logo'>
            <ArrowIconLogo fill={theme} />
            forex<span style={{ color: theme, fontWeight: 'bold' }}>Change</span>
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
               <span>{userNameF}</span>
               <IconLogout />
            </Link>
         </nav>
      </div>
   );
}

export default Navbar;