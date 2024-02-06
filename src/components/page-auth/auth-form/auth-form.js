
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
    <main className="auth-form">
        <Link to={"/"} className='auth-form__logo' style={{ backgroundImage: `url(${logo})` }} />
        
        <h1 className="auth-form__title"> {title} </h1>
        
        <form onSubmit={handleSubmit} className='auth-form__form'> 
          <div className='fields'>
            <fieldset className='auth-form__line'>
              <p className='auth-form__comment'>Имя</p>
              <input type="text" className='auth-form__input' name="name" id="input-name" 
                value={formValues.name} onChange={handleChange} placeholder="Введите имя" 
                minlength="2" maxlength="40" required />
              <span class="error input-error"></span>
            </fieldset>

            <fieldset className='auth-form__line'>          
              <p className='auth-form__comment'>E-mail</p>
              <input type="email" className="auth-form__input" name="email" id="input-email"
                value={formValues.email} onChange={handleChange} placeholder="Ввведите почту" 
                minlength="2" maxlength="40" required />
              <span class="error input-error"></span>
            </fieldset>

            <fieldset className={`auth-form__line ${!isRegister ? `auth-form__line-invisible` : ``} `}>
              <p className='auth-form__comment'>Пароль</p>
              <input type="password" className="auth-form__input" name="password" id="input-password"
                value={formValues.password} onChange={handleChange} placeholder="Введите пароль" 
                minlength="2" maxlength="20" required />
              <span class="error input-error"></span>
            </fieldset>
          </div>
          
          <div> 
            <span class="error submit-error"></span>
            <input type="submit" className="button auth-form__submit" value={submmitText} />
          </div>
        </form>

        <div className="auth-form__question">
          <p>{questionText}</p>
          <Link to={link} className="link auth-form__link">{linkText}</Link>
        </div>       
    </main>
  );
}

export default AuthForm;