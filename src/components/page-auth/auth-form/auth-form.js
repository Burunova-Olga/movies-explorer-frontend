
import { useEffect, React } from 'react';

import useForm from "../../../hooks/UseForm";
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';

function AuthForm({isRegister, title, submmitText, questionText, linkText, link, onSubmit})
{ 
  const {formValues, handleChange, setFormValues} = useForm ({ name: '', email: '', password: ''});
 
  useEffect(() => {
    const origBodyStyle = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "rgb(32, 32, 32)";
    return () => document.body.style.backgroundColor = origBodyStyle;
  }, []);

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