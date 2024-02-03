// компонент, который отрисовывает шапку сайта на страницу

import React from 'react';
import logo_mini from '../../images/logo-mini.svg';
import Navigation from '../navigation/navigation';

function Header()
{
  return (
    <section className="section header">
      <div className='header__logo' style={{ backgroundImage: `url(${logo_mini})` }}></div>
      <Navigation isAutorize={true}/>
    </section>
  );
}

export default Header;