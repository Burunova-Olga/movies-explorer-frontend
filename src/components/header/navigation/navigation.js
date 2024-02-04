// компонент, который отвечает за меню навигации на сайте

import React from 'react';
import { Link } from 'react-router-dom';

function Navigation()
{
  const currentPath = window.location.pathname;
  
  return (
    <nav className="navigation"> 
      <Link to={"/signup"} className={`link navigation__link ${currentPath == "/signup" ? `navigation__link-active` : ``}`}>Регистрация</Link>
      <Link to={"/signin"} className={`button navigation__button ${currentPath == "/signin" ? `navigation__link-active` : ``}`}>Войти</Link>
    </nav>
  );
}

export default Navigation;