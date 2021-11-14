import React from 'react'
import '../sass/themeToggler.scss'

const ThemeToggler = function ({ setTheme }) {
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
      <div className='theme' onClick={changeTheme}>
         Select a theme -
         <button
            className='theme__button theme__button--green theme__button--active'
            data-theme='#276738'
         ></button>
         <button
            className='theme__button theme__button--red'
            data-theme='#ef233c'
         ></button>
         <button
            className='theme__button theme__button--orange'
            data-theme='#eb5e28'
         ></button>
      </div>
   )
}

export default ThemeToggler