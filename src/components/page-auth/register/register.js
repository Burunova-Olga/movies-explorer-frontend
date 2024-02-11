// компонент страницы регистрации

import AuthForm from '../auth-form/auth-form';

function Register({ onSubmit, serverError })
{
  return (
    <AuthForm
      isRegister={true}
      title="Добро пожаловать!"
      submmitText="Зарегистрироваться"
      questionText="Уже зарегистрированы?"
      linkText="Войти"
      link="/signin"
      onSubmit={onSubmit}
      serverError={serverError}
    />
  );
}

export default Register;