// компонент, который отрисовывает шапку сайта на страницу

import React from 'react';
import { Link } from 'react-router-dom';
import logo_mini from '../../images/logo-mini.svg';
import NavigationAutorize from './nav-auth/nav-auth';
import Navigation from './nav-empty/nav-empty';

function Header()
{
  function TypeHeader(props)
  {
    if (props.isAutorize) 
      return <NavigationAutorize />;
    else
      return <Navigation />;
  }

  let loggedIn = JSON.parse(localStorage.getItem('isLogged'));
  if (loggedIn == null) loggedIn = false;
  
  return (
    <header className="section header">
      <Link to={"/"}  className='header__logo' style={{ backgroundImage: `url(${logo_mini})` }} />
      <TypeHeader isAutorize={loggedIn} />
    </header>
  );
}

export default Header;
