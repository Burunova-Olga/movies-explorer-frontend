// компонент с навигацией по странице «О проекте»

import React from 'react';

function NavTab()
{
  return (
    <nav className="nav-tab">      
      <ul className="nav-tab__list">
        <li><a href="#about-project" className="link nav-tab__link">О проекте</a></li>
        <li><a href="#techs" className="link nav-tab__link">Технологии</a></li>
        <li><a href="#about-me" className="link nav-tab__link">Студент</a></li>
      </ul>
    </nav>
  );
}

export default NavTab;