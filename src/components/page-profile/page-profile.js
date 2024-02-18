// компонент страницы изменения профиля

import Header from '../header/header';
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { useFormWithValidation } from "../../hooks/UseForm";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ServerErrorContext } from '../../contexts/ServerErrorContext';

function Profile({ signOut, onSubmit })
{
  const currentUser = React.useContext(CurrentUserContext);
  const serverError = React.useContext(ServerErrorContext);

  const {formValues, handleChange, errors, isValid} = useFormWithValidation ({ name: currentUser.name, email: currentUser.email});
  
  const handleSubmit = (e) =>
  {
    e.preventDefault();

    if (!formValues.email || !formValues.name)
      return;

    onSubmit(formValues.name, formValues.email);
  }

  useEffect(() =>
  {
    formValues.name = currentUser.name;
    formValues.email = currentUser.email;

  }, [currentUser])

  function onChange()
  {
    document.querySelector('.profile__logout').classList.toggle('profile__button-invisible');
    document.querySelector('.profile__change').classList.toggle('profile__button-invisible');
    document.querySelector('.profile-form__submit').classList.toggle('profile__button-invisible')
  }

  return (
    <>
      <Header />
      <main>
        <div className='profile'>
          <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
          
          <form onSubmit={handleSubmit} className='profile-form'>
            <div>
              <fieldset className='profile-form__field'>
                <p>Имя</p>
                <input type="text" className='profile-form__input'
                  name="name" id="input-name" value={formValues.name} onChange={handleChange} 
                  placeholder='Введите новое имя' minLength="2" maxLength="40" 
                  pattern="[a-zA-Zа-яА-ЯёЁ\s\-]*" required />              
                <span className={`error input-error ${errors.name!="" ? 'error_visible' : ''}`} >{errors.name}</span>
              </fieldset>

              <fieldset className='profile-form__field'>
                <p>E-mail</p>
                <input type="email" className="profile-form__input" name="email" id="input-email"
                  value={formValues.email} onChange={handleChange} placeholder='Введите новую почту'
                  minLength="2" maxLength="40" required />              
                  <span className={`error input-error ${errors.email!="" ? 'error_visible' : ''}`}>{errors.email}</span>
              </fieldset>
            </div>

            <div> 
              <span className={`error submit-error ${serverError!="" ? 'error_visible' : ''}`}>
                {serverError}
              </span>
              <input type="submit" name="submit" value="Сохранить" disabled={!isValid}
              className={`button profile-form__submit profile__button profile__button-invisible  ${!isValid ? 'profile__button-disabled' : ''}`} />
            </div>
          </form>
          
          <button type="button" onClick={onChange} className="link profile__change profile__button">Редактировать</button>
          <Link to={"/"} onClick={signOut} className="link profile__logout profile__button">Выйти из аккаунта</Link>
        </div>
      </main>
    </>
  );
}

export default Profile;