import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import '../sass/themeToggler.scss'

const ThemeToggler = function ({ settings }) {
   const [, setTheme] = useTheme()

   const changeTheme = (e) => {
      const themeButtons = document.querySelectorAll('.theme__button');

      const clicked = e.target.closest('.theme__button');
      if (!clicked) return;
      const selectedTheme = clicked.dataset.theme;

      themeButtons.forEach((btn) => btn.classList.remove('theme__button--active'));
      clicked.classList.add('theme__button--active');

      setTheme(selectedTheme);
   }

   return (
      <div className='theme settings__theme' onClick={changeTheme} style={{ position: `${settings ? 'static' : 'absolute'}` }}>
         Select a theme -
         <button
            className='theme__button theme__button--brown theme__button--active'
            data-theme='#83776d'
         ></button>
         <button
            className='theme__button theme__button--purple'
            data-theme='#3f51b5'
         ></button>
         <button
            className='theme__button theme__button--gray'
            data-theme='#4D678C'
         ></button>
         <button
            className='theme__button theme__button--red'
            data-theme='#e63946'
         ></button>
         {/* <button
            className='theme__button theme__button--red'
            data-theme='#ef233c'
         ></button> */}
         {/* <button
            className='theme__button theme__button--orange'
            data-theme='#eb5e28'
         ></button> */}
      </div>
   )
}

export default ThemeToggler