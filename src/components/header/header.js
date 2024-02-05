// компонент, который отрисовывает шапку сайта на страницу

import React from 'react';
import { Link } from 'react-router-dom';
import logo_mini from '../../images/logo-mini.svg';
import NavigationAutorize from './navigation_autorize/navigation_autorize';
import Navigation from './navigation/navigation';

function Header()
{
  function TypeHeader(props)
  {
    if (props.isAutorize) 
      return <NavigationAutorize />;
    else
      return <Navigation />;
  }

  return (
    <header className="section header">
      <Link to={"/"}  className='header__logo' style={{ backgroundImage: `url(${logo_mini})` }} />
      <TypeHeader isAutorize={true} />
    </header>
  );
}

export default Header;