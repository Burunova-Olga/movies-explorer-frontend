
import React from 'react';

import useForm from "../../../hooks/UseForm";
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';

function AuthForm({isRegister, title, submmitText, questionText, linkText, link, onSubmit})
{ 
  const {formValues, handleChange, setFormValues} = useForm ({ name: '', email: '', password: ''});
 
  const handleSubmit = (e) =>
  {
    e.preventDefault();

    if (!formValues.email || !formValues.password || (isRegister && !formValues.name))    
      return;

    onSubmit(formValues.name, formValues.email, formValues.password);    
  }

  return (
    <div className="auth-form__fon">
      <div className="auth-form">
        <Link to={"/"} className='auth-form__logo' style={{ backgroundImage: `url(${logo})` }} />
        <h1 className="auth-form__title"> {title} </h1>
        <form onSubmit={handleSubmit} className='auth-form__form'> 
          <p className={`auth-form__comment ${!isRegister ? `auth-form__invisible-element` : ``} `}>Имя</p>
          <input type="text" className={`auth-form__input ${!isRegister ? `auth-form__invisible-element` : ``} `}
            name="name" id="input-name" value={formValues.name} onChange={handleChange} required />
          <span class="input-error"></span>

          <p className='auth-form__comment'>E-mail</p>
          <input type="email" className="auth-form__input" name="email" id="input-email"
            value={formValues.email} onChange={handleChange} required />
          <span class="input-error"></span>

          <p className='auth-form__comment'>Пароль</p>
          <input type="password" className="auth-form__input" name="password" id="input-password"
            value={formValues.password} onChange={handleChange} required />
          <span class="input-error"></span>

          <span class="submit-error"></span>
          <input type="submit" className="button auth-form__submit" value={submmitText} />
        </form>

        <div className="auth-form__question">
          <p>{questionText}</p>
          <Link to={link} className="link auth-form__link">{linkText}</Link>
        </div>       
      </div>
    </div>
  );
}

export default AuthForm;