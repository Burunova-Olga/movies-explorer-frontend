// компонент страницы авторизации

import AuthForm from '../auth-form/auth-form';

function Login({onSubmit})
{
  return (
    <AuthForm
      isRegister={false}
      title="Рады видеть!" 
      submmitText="Войти" 
      questionText="Ещё не зарегистрированы?"
      linkText="Регистрация"
      link="/signup"
      onSubmit={onSubmit}
    />
  );
}

export default Login;