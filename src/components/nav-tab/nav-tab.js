// компонент с навигацией по странице «О проекте»

import React from 'react';

function NavTab()
{
  return (
    <nav className="nav-tab">      
      <ul class="nav-tab__list">
        <li><a href="https://yandex.ru/maps" class="nav-tab__link link">О проекте</a></li>
        <li><a href="https://yandex.ru/pogoda" class="nav-tab__link link">Технологии</a></li>
        <li><a href="https://rasp.yandex.ru" class="nav-tab__link link">Студент</a></li>
      </ul>
    </nav>
  );
}

export default NavTab;