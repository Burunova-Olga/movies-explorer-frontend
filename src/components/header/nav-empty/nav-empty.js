// компонент, который отвечает за меню навигации на сайте

import React from 'react';
import { Link } from 'react-router-dom';

function Navigation()
{
  const currentPath = window.location.pathname;
  
  return (
    <nav className="nav-empty"> 
      <Link to={"/signup"} className={`link nav-empty__link ${currentPath == "/signup" ? `nav-empty__link_active` : ``}`}>Регистрация</Link>
      <Link to={"/signin"} className={`button nav-empty__button ${currentPath == "/signin" ? `nav-empty__link_active` : ``}`}>Войти</Link>
    </nav>
  );
}

export default Navigation;