import React from 'react'
import '../sass/login.scss';

import LoginSvg from '../icons/LoginSvg';
import { ArrowIconLogo } from '../icons/Icons';
import ThemeToggler from './ThemeToggler';

import { useUserContext } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext';

import { users } from '../userData'
import { useProducts } from '../contexts/ProductsContext';

const LoginForm = function ({ isLoggedIn, setIsLoggedIn }) {
   const [, setUser] = useUserContext();
   const [, setProducts] = useProducts();

   const [theme] = useTheme();

   const handleSubmit = (e) => {
      e.preventDefault();

      const { email, name } = e.target.elements;
      const userInput = {
         name: name.value,
         email: email.value,
      }

      const callAll = (user) => {
         const [p1, p2] = users.filter(u => u.owner !== user.owner).map(u => u.products);
         const products = [...p1, ...p2];

         setUser(user);
         setProducts(products);
         setIsLoggedIn('loggedIn');
      }

      if (!userInput.name || !userInput.email) {
         setIsLoggedIn('notFilled');
      } else {
         const user = users.find(user => user.owner === userInput.name);

         if (user?.email === userInput.email) {
            callAll(user);
         } else {
            setIsLoggedIn('invalidInput');
         }
      }
   }

   return (
      <div className='form-container'>
         <div className='login'>
            <div className='login__logo'>
               <ArrowIconLogo fill={theme} />
               forex<span style={{ color: theme, fontWeight: 'bold' }}>Change</span>
            </div>

            <h2 className='login__title'>Login<br />and exchange your goods with others</h2>
            <LoginSvg />

            <form className='login__form' onSubmit={handleSubmit}>
               <div className='login__name'>
                  <label htmlFor='name' className='login__label'>Full name</label>
                  <input
                     className='login__input'
                     id='name'
                     placeholder="Tanvir rahman"
                     defaultValue="Jonas schmedtmann"
                  />
               </div>
               <div className='login__email'>
                  <label htmlFor='email' className='login__label'>Email address</label>
                  <input
                     className='login__input'
                     id='email'
                     placeholder="hellotanvir@gmail.com"
                     defaultValue="hellojonas@gmail.com"
                  />
               </div>
               <div className='login__submission'>
                  <button className='login__submit' style={{ backgroundColor: theme }}>Login</button>
                  {
                     isLoggedIn === 'notFilled'
                        ? <h4 className='login__error'>Empty Username or Email</h4>
                        : isLoggedIn === 'invalidInput'
                           ? <h4 className='login__error'>Invalid Username or Email</h4>
                           : null
                  }
               </div>
            </form>

            <ThemeToggler />
         </div>
      </div>
   )
}

export default LoginForm