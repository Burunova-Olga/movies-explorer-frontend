// компонент, который отвечает за меню навигации на сайте

import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../images/avatar.svg';
import burger from '../../../images/burger.svg';
import close from '../../../images/close.svg';

function NavigationAutorize()
{
  const currentPath = window.location.pathname;

  function toggleClick()
  {
    document.querySelector('.burger').classList.add('burger_opened');
    document.querySelector('.cover').classList.add('cover_visible');
  }
  
  function closeClick()
  {
    document.querySelector('.burger').classList.remove('burger_opened');
    document.querySelector('.cover').classList.remove('cover_visible');
  }

  return (
    <div className='nav-auth'>
      <button type="button" onClick={toggleClick} className="button nav-auth__toggle" style={{ backgroundImage: `url(${burger})` }} ></button>
      
      <div className='cover'></div>
      <div className='burger'>
        <button type="button" onClick={closeClick} className="button burger__close" style={{ backgroundImage: `url(${close})` }} ></button>
      
        <Link to={"/"} className={`link burger__link ${currentPath == "/" ? `burger__link_active` : ``}`}>Главная</Link>        
        <Link to={"/movies"} className={`link burger__link ${currentPath == "/movies" ? `burger__link_active` : ``}`}>Фильмы</Link>
        <Link to={"/saved-movies"} className={`link burger__link ${currentPath == "/saved-movies" ? `burger__link_active` : ``}`}>Сохранённые фильмы</Link>
        <Link to={"/profile"} className={`link burger__link ${currentPath == "/profile" ? `burger__link_active` : ``}`}>Аккаунт
          <span className='burger__foto' style={{ backgroundImage: `url(${avatar})` }}/>
        </Link>
      </div>

      <nav className="simplenav"> 
        <Link to={"/movies"} className={`link simplenav__link ${currentPath == "/movies" ? `simplenav__link_active` : ``}`}>Фильмы</Link>
        <Link to={"/saved-movies"} className={`link simplenav__link ${currentPath == "/saved-movies" ? `simplenav__link_active` : ``}`}>Сохранённые фильмы</Link>
        <Link to={"/profile"} className={`link simplenav__link ${currentPath == "/profile" ? `simplenav__link_active` : ``}`}>Аккаунт
          <span className='simplenav__avatar' style={{ backgroundImage: `url(${avatar})` }}/>
        </Link>
      </nav>
    </div>    
  );
}

export default NavigationAutorize;


