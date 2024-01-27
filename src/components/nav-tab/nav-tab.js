// компонент с навигацией по странице «О проекте»

import React from 'react';

function NavTab()
{
  return (
    <nav className="nav-tab">      
      <ul className="nav-tab__list">
        <li><a href="https://yandex.ru/maps" className="nav-tab__link link">О проекте</a></li>
        <li><a href="https://yandex.ru/pogoda" className="nav-tab__link link">Технологии</a></li>
        <li><a href="https://rasp.yandex.ru" className="nav-tab__link link">Студент</a></li>
      </ul>
    </nav>
  );
}

export default NavTab;