import React from 'react';
import './sass/sidebar.scss';
import { Link } from 'react-router-dom';
import { useTheme } from './Components/ThemeContext';

const Sidebar = function ({ location, history }) {
   const [theme] = useTheme();

   const handleSelect = (selected) => {
      const to = '/' + selected;

      if (location.pathname !== to) {
         history.push(to);
      }
   }

   React.useEffect(() => {
      const activeNavItem = document.querySelector('.nav__item--active');
      activeNavItem.style.backgroundColor = theme;

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
      clicked.style.backgroundColor = theme;
   }

   return (
      <div className='sidebar' onSelect={handleSelect}>
         <ul className='nav' onClick={activeItem}>
            <li className='nav__item nav__item--active'>
               <Link to='/' className='nav__link'>Home</Link>
            </li>
            <li className='nav__item'>
               <Link to='/requests' className='nav__link'>Requests</Link>
            </li>
            <li className='nav__item'>
               <Link to='/bookmarks' className='nav__link'>Bookmarks</Link>
            </li>
            <li className='nav__item'>
               <Link to='/upload' className='nav__link'>Uploads</Link>
            </li>
            <li className='nav__item'>
               <Link to='/settings' className='nav__link'>Settings</Link>
            </li>
         </ul>
      </div>
   )
}

export default Sidebar;