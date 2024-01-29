// компонент страницы регистрации

import AuthForm from '../auth-form/auth-form';

function Register({ onSubmit })
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
    />
  );
}

export default Register;