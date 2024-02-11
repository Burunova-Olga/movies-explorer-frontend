
import React from 'react';

import { useFormWithValidation } from "../../../hooks/UseForm";
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import { ServerErrorContext } from '../../../contexts/ServerErrorContext';

function AuthForm({isRegister, title, submmitText, questionText, linkText, link, onSubmit})
{ 
  const serverError = React.useContext(ServerErrorContext);

  const {formValues, handleChange, errors, isValid} = useFormWithValidation ({ name: '', email: '', password: ''});
  
  const handleSubmit = (e) =>
  {    
    e.preventDefault();

    if (!formValues.email || !formValues.password || (isRegister && !formValues.name))    
      return;

    onSubmit(formValues.email, formValues.password, formValues.name);
  } 
  

  return (
    <main className="auth-form">
        <Link to={"/"} className='auth-form__logo' style={{ backgroundImage: `url(${logo})` }} />
        
        <h1 className="auth-form__title"> {title} </h1>
        
        <form onSubmit={handleSubmit} className='auth-form__form'> 
          <div className='fields'>
            {isRegister
              ? 
                <fieldset className='auth-form__line'>
                  <p className='auth-form__comment'>Имя</p>
                  <input type="text" className='auth-form__input' name="name" id="input-name" 
                    value={formValues.name} onInput={handleChange} placeholder="Введите имя" 
                    minLength="2" maxLength="40" required pattern="[a-zA-Zа-яА-ЯёЁ\s\-]*"/>
                  <span className={`error input-error ${errors.name!="" ? 'input-error_visible' : ''}`} >{errors.name}</span>
                </fieldset>
              : 
                <></>
            }

            <fieldset className='auth-form__line'>          
              <p className='auth-form__comment'>E-mail</p>
              <input type="email" className="auth-form__input" name="email" id="input-email"
                value={formValues.email} onInput={handleChange} placeholder="Ввведите почту" 
                minLength="2" maxLength="40" required />
              <span className={`error input-error ${errors.email!="" ? 'input-error_visible' : ''}`}>{errors.email}</span>
            </fieldset>

            <fieldset className='auth-form__line'>   
              <p className='auth-form__comment'>Пароль</p>
              <input type="password" className="auth-form__input" name="password" id="input-password"
                value={formValues.password} onInput={handleChange} placeholder="Введите пароль" 
                minLength="8" maxLength="20" required />
              <span className={`error input-error ${errors.password!="" ? 'input-error_visible' : ''}`}>{errors.password}</span>
            </fieldset>
          </div>
          
          <div> 
            <span className={`error submit-error ${serverError!="" ? 'submit-error_visible' : ''}`}>
              {serverError}
            </span>
            <input type="submit" className="button auth-form__submit" name="submit" value={submmitText} disabled={!isValid}/>
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
