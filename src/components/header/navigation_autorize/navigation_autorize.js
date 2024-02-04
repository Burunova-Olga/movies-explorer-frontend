// компонент, который отвечает за меню навигации на сайте

import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../images/avatar.svg';
import burger from '../../../images/burger.svg';
import close from '../../../images/close.svg';

function NavigationAutorize()
{
  const currentPath = window.location.pathname;

  console.log(currentPath);
  function toggleClick()
  {
    document.querySelector('.popup').classList.add('popup-opened');
  }
  
  function closeClick()
  {
    document.querySelector('.popup').classList.remove('popup-opened');
  }

  return (
    <div className='navigation_autorize'>
      <button onClick={toggleClick} className="button header__toggle" style={{ backgroundImage: `url(${burger})` }} ></button>
      
      <div className='popup'>
        <button onClick={closeClick} className="button header__close" style={{ backgroundImage: `url(${close})` }} ></button>
      
        <Link to={"/"} className={`link navigation__link ${currentPath == "/" ? `navigation-autorize_active` : ``}`}>Главная</Link>        
        <Link to={"/movies"} className={`link navigation__link ${currentPath == "/movies" ? `navigation-autorize_active` : ``}`}>Фильмы</Link>
        <Link to={"/saved-movies"} className={`link navigation__link ${currentPath == "/saved-movies" ? `navigation-autorize_active` : ``}`}>Сохранённые фильмы</Link>
        <Link to={"/profile"} className={`link navigation__link ${currentPath == "/profile" ? `navigation-autorize_active` : ``}`}>Аккаунт
          <span className='navigation__foto' style={{ backgroundImage: `url(${avatar})` }}/>
        </Link>
      </div>

      <nav className="navigation__links"> 
        <Link to={"/movies"} className={`link navigation__link ${currentPath == "/movies" ? `navigation-autorize_active` : ``}`}>Фильмы</Link>
        <Link to={"/saved-movies"} className={`link navigation__link ${currentPath == "/saved-movies" ? `navigation-autorize_active` : ``}`}>Сохранённые фильмы</Link>
        <Link to={"/profile"} className={`link navigation__link ${currentPath == "/profile" ? `navigation-autorize_active` : ``}`}>Аккаунт
          <span className='navigation__foto' style={{ backgroundImage: `url(${avatar})` }}/>
        </Link>
      </nav>
    </div>    
  );
}

export default NavigationAutorize;


