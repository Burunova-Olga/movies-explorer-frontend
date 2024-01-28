// компонент страницы регистрации
import { NavLink, Link } from 'react-router-dom';
import AuthForm from '../auth-form/auth-form';

function Register({onSubmit})
{
  return (
    <div className='register'>
      <AuthForm       
        title="Добро пожаловать!" 
        submmitText="Зарегистрироваться" 
        onSubmit={onSubmit}  
      >
        <div className="auth-form__question">
          <p>Уже зарегистрированы?</p>
          <Link to="/signin" className="auth-form__link link">Войти</Link>
        </div>
      </AuthForm>
    </div>
  );
}

export default Register;