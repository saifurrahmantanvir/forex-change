import React from 'react'
import '../sass/login.scss';

import { users } from '../userData'

import LoginSvg from '../icons/LoginSvg';
import { useUserContext } from './UserContext';

const LoginForm = function ({ isLoggedIn, setIsLoggedIn }) {
   const [, setUser] = useUserContext();

   const handleSubmit = (e) => {
      e.preventDefault();

      const { email, name } = e.target.elements;
      const userInput = {
         name: name.value,
         email: email.value,
      }

      const callAll = (user) => {
         setUser(user);
         setIsLoggedIn('loggedIn');
      }

      if (!userInput.name || !userInput.email) {
         setIsLoggedIn('notFilled');
      } else {
         const user = users.find(user => user.owner === userInput.name);

         if (user.email === userInput.email) {
            callAll(user);
         } else {
            setIsLoggedIn('invalidInput');
         }
      }
   }

   return (
      <div className='form-container'>
         <div className='login'>
            <h2 className='login__title'>Login<br />& exchange your goods with others</h2>
            <LoginSvg />

            <form className='login__form' onSubmit={handleSubmit}>
               <div className='login__name'>
                  <label htmlFor='name' className='login__label'>Full name</label>
                  <input
                     className='login__input'
                     id='name'
                     placeholder="Tanvir rahman"
                     value="Tanvir rahman"
                     // value="Asmaul hosna"
                     // value="Jonas schmedtmann"
                     readOnly
                  />
               </div>
               <div className='login__email'>
                  <label htmlFor='email' className='login__label'>Email address</label>
                  <input
                     className='login__input'
                     id='email'
                     placeholder="hellotanvir@gmail.com"
                     value="hellotanvir@gmail.com"
                     // value="helloropi@gmail.com"
                     // value="hellojonas@gmail.com"
                     readOnly
                  />
               </div>
               <div className='login__submission'>
                  <button className='login__submit'>Log In</button>
                  {
                     isLoggedIn === 'notFilled'
                        ? <h4 className='login__error'>Empty Username or Email</h4>
                        : isLoggedIn === 'invalidInput'
                           ? <h4 className='login__error'>Invalid Username or Email</h4>
                           : null
                  }
               </div>
            </form>
         </div>
      </div>
   )
}

export default LoginForm