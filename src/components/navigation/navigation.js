// компонент, который отвечает за меню навигации на сайте

import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../images/avatar.svg';

function Navigation({isAutorize})
{
  const currentPath = window.location.pathname;
  
  if (isAutorize)
  {
    return (
      <nav className="navigation_autorize"> 
        <Link to={"/movies"} className={`link navigation__movies ${currentPath == "/movies" ? `active` : ``}`}>Фильмы</Link>
        <Link to={"/saved-movies"} className={`link navigation__movies ${currentPath == "/saved-movies" ? `active` : ``}`}>Сохранённые фильмы</Link>
        <Link to={"/profile"} className={`link navigation__movies ${currentPath == "/profile" ? `active` : ``}`}>Аккаунт
          <span className='navigation__foto' style={{ backgroundImage: `url(${avatar})` }}/>
        </Link>
      </nav>
    );
  }
  else 
  {
    return (
      <nav className="navigation"> 
        <Link to={"/signup"} className={`link navigation__link ${currentPath == "/signup" ? `active` : ``}`}>Регистрация</Link>
        <Link to={"/signin"} className={`button navigation__button ${currentPath == "/signin" ? `active` : ``}`}>Войти</Link>
      </nav>
    );
  }
}

export default Navigation;