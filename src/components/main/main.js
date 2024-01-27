// компонент страницы «О проекте»

import React from 'react';

import Promo from '../promo/promo';
import NavTab from '../nav-tab/nav-tab';
import AboutProject from '../about-project/about-project';

function Main()
{
  return (
    <main>
      <Promo />
      <NavTab />
      <AboutProject />
    </main>
  );
}

export default Main;