// компонент, который отрисовывает шапку сайта на страницу

import React from 'react';
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
    <section className="section header">
      <div className='header__logo' style={{ backgroundImage: `url(${logo_mini})` }}></div>
      <TypeHeader isAutorize={true} />
    </section>
  );
}

export default Header;