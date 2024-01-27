// компонент страницы «О проекте»

import React from 'react';

import Promo from '../promo/promo';
import NavTab from '../nav-tab/nav-tab';
import AboutProject from '../about-project/about-project';
import Techs from '../techs/techs';
import AboutMe from '../about-me/about-me';

function Main()
{
  return (
    <main>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;