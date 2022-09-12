import React from 'react';
import './sass/sidebar.scss';

import { Link } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext';

const Sidebar = function ({ location, history }) {
   const [theme] = useTheme();

   const handleSelect = (selected) => {
      const to = '/' + selected;

      if (location.pathname !== to) {
         history.push(to);
      }
   }

   /*
   React.useEffect(() => {
      const activeNavItem = document.querySelector('.nav__item--active');
      activeNavItem.style.backgroundColor = theme;

   }, [theme])
   */

   React.useEffect(() => {
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.backgroundColor = theme;

   }, [theme])

   const activeItem = (e) => {
      const navItems = document.querySelectorAll('.nav__item');

      const clicked = e.target.closest('.nav__item');
      if (!clicked) return;

      navItems.forEach((navItem) => {
         navItem.classList.remove('nav__item--active');
         navItem.style.backgroundColor = '';
      });

      clicked.classList.add('nav__item--active');
      /* clicked.style.backgroundColor = '#3f51b5'; */
   }

   return (
      <div className='sidebar' onSelect={handleSelect} onClick={activeItem}>
         <ul className='nav'>
            <li className='nav__item nav__item--active'>
               <Link to='/' className='nav__link'>Home Feed</Link>
            </li>
            <li className='nav__item'>
               <Link to='/exchanges' className='nav__link'>Exchanges</Link>
            </li>
            <li className='nav__item'>
               <Link to='/bookmarks' className='nav__link'>Bookmarks</Link>
            </li>
            <li className='nav__item'>
               <Link to='/upload' className='nav__link'>Uploads</Link>
            </li>
            <li className='nav__item'>
               <Link to='/settings' className='nav__link'>Preference</Link>
            </li>
         </ul>

         <p className="copyright">&copy; Copyright forexChange 2021 by <a href='https://www.linkedin.com/in/saifurrahmantanvir' target={"_blank"} className='copyright__link' rel="noreferrer">Tanvir rahman.</a></p>
      </div>
   )
}

export default Sidebar;