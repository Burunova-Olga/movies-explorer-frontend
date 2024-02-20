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
  const [isChangeMode, setIsChangeMode] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isChange, setIsChange] = useState(false);

  const {formValues, handleChange, errors, isValid} = useFormWithValidation ({ name: currentUser.name, email: currentUser.email});
  
  // Отправка запроса на сохранение
  const handleSubmit = (e) =>
  {
    e.preventDefault();

    if (!formValues.email || !formValues.name)
      return;

    setIsSaved(true);
    onSubmit(formValues.name, formValues.email);
  }

  // Если изменились данные пользователя
  useEffect(() =>
  {
    formValues.name = currentUser.name;
    formValues.email = currentUser.email;

  }, [currentUser])
  
  // Обработка ответа сервера
  useEffect(() =>
  {
    if (serverError!=null)
    {
      if (serverError === "" && isSaved)
      {
        document.querySelector('.notification').classList.add('notification_visible');
        document.querySelector('.submit-error').classList.remove('error_visible');
        onChange();
      }
      else 
      {
        document.querySelector('.notification').classList.remove('notification_visible');
        document.querySelector('.submit-error').classList.add('error_visible');
      }
    }
  }, [serverError, isSaved])

  // Переключение режима просмотра/изменения
  function onChange()
  {
    setIsChangeMode(!isChangeMode);
    document.querySelector('.profile__logout').classList.toggle('profile__button-invisible');
    document.querySelector('.profile__change').classList.toggle('profile__button-invisible');
  }

  // Изменение данных в полях ввода
  function handleInput()
  {
    setIsSaved(false);

    const name = document.getElementById('input-name').value;
    const email = document.getElementById('input-email').value;
    setIsChange(name!= currentUser.name || email != currentUser.email)
  }

  return (
    <>
      <Header />
      <main>
        <div className='profile'>
          <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
          <p className='notification'> Данные профиля успешно сохранены </p>
          
          <form onSubmit={handleSubmit} className='profile-form'>
            <div>
              <fieldset className='profile-form__field'>
                <p>Имя</p>
                <input type="text" className='profile-form__input'
                  name="name" id="input-name" value={formValues.name} onInput={handleInput} onChange={handleChange} 
                  placeholder='Введите новое имя' minLength="2" maxLength="40" 
                  pattern="[a-zA-Zа-яА-ЯёЁ\s\-]*" required />              
                <span className={`error input-error ${(errors.name!="" && errors.name!=null) ? 'error_visible' : ''}`} >{errors.name}</span>
              </fieldset>

              <fieldset className='profile-form__field'>
                <p>E-mail</p>
                <input type="email" className="profile-form__input" name="email" id="input-email"
                  value={formValues.email} onInput={handleInput} onChange={handleChange} placeholder='Введите новую почту'
                  minLength="2" maxLength="40" required />              
                  <span className={`error input-error ${(errors.email!="" && errors.email!=null) ? 'error_visible' : ''}`}>{errors.email}</span>
              </fieldset>
            </div>

            <div> 
              <span className='error submit-error'>
                {serverError}
              </span>
              <input type="submit" name="submit" value="Сохранить" disabled={!(isValid && isChange) }
              className={`button profile-form__submit profile__button ${!isChangeMode ? 'profile__button-invisible' : ''} ${!(isValid && isChange) ? 'profile__button-disabled' : ''}`} />
            </div>
          </form>
          
          <button type="button" onClick={onChange} className="link profile__change profile__button">Редактировать</button>
          <Link to={"/"} onClick={signOut} className="link profile__logout profile__button ">Выйти из аккаунта</Link>
        </div>
      </main>
    </>
  );
}

export default Profile;