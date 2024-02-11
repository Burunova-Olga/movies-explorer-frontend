// компонент страницы изменения профиля

import Header from '../header/header';
import { Link } from 'react-router-dom';
import React from 'react';
import { useForm } from "../../hooks/UseForm";

function Profile({ user, signOut, onSubmit })
{
  const { formValues, handleChange, setFormValues } = useForm({ name: user.name, email: user.email });

  const handleSubmit = (e) =>
  {
    e.preventDefault();

    if (!formValues.email || !formValues.name)
      return;

    onSubmit(formValues.name, formValues.email);
  }

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
          <h1 className='profile__title'>Привет, {user.name}!</h1>
          
          <form onSubmit={handleSubmit} className='profile-form'>
            <div>
              <fieldset className='profile-form__field'>
                <p>Имя</p>
                <input type="text" className='profile-form__input'
                  name="name" id="input-name" value={formValues.name} onChange={handleChange} 
                  placeholder='Введите новое имя' minlength="2" maxlength="40" required />              
                <span className="error input-error"></span>
              </fieldset>

              <fieldset className='profile-form__field'>
                <p>E-mail</p>
                <input type="email" className="profile-form__input" name="email" id="input-email"
                  value={formValues.email} onChange={handleChange} placeholder='Введите новую почту'
                  minlength="2" maxlength="40" required />              
                  <span className="error input-error"></span>
              </fieldset>
            </div>

            <div> 
              <span className="error submit-error"></span>
              <input type="submit" className="button profile-form__submit profile__button profile__button-invisible" value="Сохранить" />
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