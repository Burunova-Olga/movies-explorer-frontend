import React from 'react';
import useForm from "../../hooks/UseForm";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

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
        <div className='auth-form__logo' style={{ backgroundImage: `url(${logo})` }} />
        <p className="auth-form__title"> {title} </p>
        <form onSubmit={handleSubmit} >        
          <p className={`auth-form__comment ${!isRegister ? `auth-form__invisible-element` : ``} `}>Имя</p>
          <input type="text" className={`auth-form__input ${!isRegister ? `auth-form__invisible-element` : ``} `}
            name="name" id="input-name" value={formValues.name} onChange={handleChange} required />

          <p className='auth-form__comment'>E-mail</p>
          <input type="email" className="auth-form__input" name="email" id="input-email"
            value={formValues.email} onChange={handleChange} required />

          <p className='auth-form__comment'>Пароль</p>
          <input type="password" className="auth-form__input" name="password" id="input-password"
            value={formValues.password} onChange={handleChange} required />
    
          <input type="submit" className="auth-form__submit" value={submmitText} />
        </form>

        <div className="auth-form__question">
          <p>{questionText}</p>
          <Link to={link} className="auth-form__link link">{linkText}</Link>
        </div>       
      </div>
    </div>
  );
}

export default AuthForm;