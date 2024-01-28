import React from 'react';
import useForm from "../../hooks/UseForm";
import logo from '../../images/logo.svg';

function AuthForm({title, submmitText, onSubmit, children})
{ 
  const {formValues, handleChange, setFormValues} = useForm ({ email: '', password: ''});
 
  const handleSubmit = (e) =>
  {
    e.preventDefault();

    if (!formValues.email || !formValues.password)    
      return;

    onSubmit(formValues.email, formValues.password);    
  }

  return (
    <div className="auth-form">
      <div className='auth-form__logo' style={{ backgroundImage: `url(${logo})` }} ></div>
      <p className="auth-form__title"> {title} </p>
      <form onSubmit={handleSubmit} >
        <p className='auth-form__comment'>Имя</p>
        <input type="email" className="auth-form__input" name="email" id="input-email"
          value={formValues.email} onChange={handleChange} required />

        <p className='auth-form__comment'>E-mail</p>
        <input type="email" className="auth-form__input" name="email" id="input-email"
          value={formValues.email} onChange={handleChange} required />

        <p className='auth-form__comment'>Пароль</p>
        <input type="password" className="auth-form__input" name="password" id="input-password"
          value={formValues.password} onChange={handleChange} required/>

        <input type="submit" className="auth-form__submit" value={submmitText} />
      </form>
      
      {children}          
    </div>
  );
}

export default AuthForm;